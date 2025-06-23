from flask import Flask, request, jsonify, render_template
from models import db, Usuario, Transferencia
from flask import Flask, render_template, request, jsonify

app = Flask(__name__)


#bd
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///db.sqlite3'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db.init_app(app)
with app.app_context():
    db.create_all()
    if not Usuario.query.first():
        u1 = Usuario(user="admin",email="admin@mail.com", password="1234", nombre="Admin",apellido="admin", saldo=5000)
        u2 = Usuario(user="franco",email="franco@mail.com", password="123456", nombre="Franco",apellido="pascua", saldo=7500)
        u3 = Usuario(user="martina",email="martina@gmail.com", password="123456", nombre="Franco",apellido="p", saldo=7500)
        u4 = Usuario(user="ulises",email="ulises@mail.com", password="123456", nombre="Franco",apellido="p", saldo=7500)
        db.session.add_all([u1, u2])
        db.session.commit()

# Rutas que cargan el HTML
@app.route('/')
def index():
    return render_template('pagina_principal.html')

@app.route('/login')
def login():
    return render_template('iniciar_sesion.html')

@app.route('/inicio')
def inicio():
    return render_template('billetera.html')

@app.route('/transfer')
def transfer():
    return render_template('transfer.html')


@app.route('/api/login', methods=['POST'])
def api_login():
    data = request.json
    usuario_input = data.get("usuario")
    password_input = data.get("clave")
    usuario = Usuario.query.filter_by(user=usuario_input).first()
    if usuario and usuario.password==password_input:
        return jsonify({
                        'status': 'ok',
                        "nombre":usuario.nombre,
                        "apellido":usuario.apellido,
                        "email":usuario.email,
                        "saldo":usuario.saldo,
                        })
    return jsonify({'status': 'error'}), 401

# API para transferencia
@app.route('/api/transfer', methods=['POST'])
def api_transfer():
    data = request.json
    monto = data.get('monto')
    return jsonify({'status': 'ok', 'monto': monto})

if __name__ == '__main__':
    app.run(debug=True)
