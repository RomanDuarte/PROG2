from models import db, Usuario, Transferencia
from flask import Flask, render_template, request, jsonify
from werkzeug.security import generate_password_hash, check_password_hash

app = Flask(__name__)

# Configuración base de datos
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///db.sqlite3'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db.init_app(app)

with app.app_context():
    db.create_all()
    if not Usuario.query.first():
        u1 = Usuario(user="admin", email="admin@mail.com", password=generate_password_hash("1234"), nombre="Admin", apellido="admin", saldo=5000)
        u2 = Usuario(user="franco", email="franco@mail.com", password=generate_password_hash("123456"), nombre="Franco", apellido="pascua", saldo=7500)
        u3 = Usuario(user="martina", email="martina@gmail.com", password=generate_password_hash("123456"), nombre="Franco", apellido="p", saldo=7500)
        u4 = Usuario(user="ulises", email="ulises@mail.com", password=generate_password_hash("123456"), nombre="Franco", apellido="p", saldo=7500)
        db.session.add_all([u1, u2, u3, u4])
        db.session.commit()

# Rutas HTML (igual que antes)
@app.route('/')
def index():
    return render_template('pagina_principal.html')

@app.route('/new_account')
def new_account():
    return render_template('datos_personales.html')

@app.route('/login')
def login():
    return render_template('iniciar_sesion.html')

@app.route('/registro')
def registro():
    return render_template('datos_personales.html')

@app.route('/pais')
def pais():
    return render_template('pais_residencia.html')

@app.route('/datos_domicilio')
def datos_domicilio():
    return render_template('domicilio.html')

@app.route('/email')
def email():
    return render_template('correo_electronico.html')

@app.route('/condiciones')
def condiciones():
    return render_template('condiciones_legales.html')

@app.route('/crear_usuario_clave')
def crear_usuario_clave():
    return render_template('usuario_clave.html')

@app.route('/inicio')
def inicio():
    return render_template('billetera.html')

@app.route('/transfer')
def transfer():
    return render_template('transfer.html')

@app.route('/ajustes_varios')
def ajustes_varios():
    return render_template('ajustes.html')

@app.route('/modificar_datos')
def modificar_datos():
    return render_template('cambio_datos_personales.html')

@app.route('/delete_cuenta')
def delete_cuenta():
    return render_template('eliminar_cuenta.html')

# API login
@app.route('/api/login', methods=['POST'])
def api_login():
    data = request.json
    usuario_input = data.get("usuario")
    password_input = data.get("clave")
    usuario = Usuario.query.filter_by(user=usuario_input).first()
    if usuario and check_password_hash(usuario.password, password_input):
        return jsonify({
            'status': 'ok',
            "nombre": usuario.nombre,
            "apellido": usuario.apellido,
            "email": usuario.email,
            "saldo": usuario.saldo,
        })
    return jsonify({'status': 'error'}), 401

# API registro
@app.route('/api/registro', methods=['POST'])
def api_registro():
    data = request.json
    usuario = data.get("usuario")
    email = data.get("email")
    nombre = data.get("nombre")
    apellido = data.get("apellido")
    password = data.get("password")

    if Usuario.query.filter_by(user=usuario).first():
        return jsonify({'status': 'error', 'mensaje': 'Usuario ya existe'}), 400

    hashed_password = generate_password_hash(password)

    nuevo_usuario = Usuario(
        user=usuario,
        email=email,
        nombre=nombre,
        apellido=apellido,
        password=hashed_password,
        saldo=0
    )
    db.session.add(nuevo_usuario)
    db.session.commit()
    return jsonify({'status': 'ok'})

# API transferencia
@app.route('/api/transfer', methods=['POST'])
def api_transfer():
    data = request.json
    usuario_origen = data.get('usuario_origen')
    usuario_destino = data.get('usuario_destino')
    monto = data.get('monto')

    if not usuario_origen or not usuario_destino or monto is None:
        return jsonify({'status': 'error', 'mensaje': 'Faltan datos'}), 400

    try:
        monto = float(monto)
    except ValueError:
        return jsonify({'status': 'error', 'mensaje': 'Monto inválido'}), 400

    if monto <= 0:
        return jsonify({'status': 'error', 'mensaje': 'Monto debe ser positivo'}), 400

    origen = Usuario.query.filter_by(user=usuario_origen).first()
    destino = Usuario.query.filter_by(user=usuario_destino).first()

    if not origen or not destino:
        return jsonify({'status': 'error', 'mensaje': 'Usuarios inválidos'}), 404

    if origen.saldo < monto:
        return jsonify({'status': 'error', 'mensaje': 'Saldo insuficiente'}), 400

    # Realizar transferencia
    origen.saldo -= monto
    destino.saldo += monto

    transferencia = Transferencia(
        emisor_id=origen.id,
        receptor_id=destino.id,
        monto=monto
    )

    db.session.add(transferencia)
    db.session.commit()

    return jsonify({'status': 'ok', 'mensaje': f'Transferidos {monto} de {usuario_origen} a {usuario_destino}'})

if __name__ == '__main__':
    app.run(debug=True)
