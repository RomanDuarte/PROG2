from models import db, Usuario, Transferencia
from flask import Flask, render_template, request, jsonify
from werkzeug.security import generate_password_hash, check_password_hash
from datetime import datetime

app = Flask(__name__)

# Configuración base de datos
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///db.sqlite3'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db.init_app(app)

with app.app_context():
    db.create_all()
    if not Usuario.query.first():
        u1 = Usuario(user="admin", email="admin@mail.com", password=generate_password_hash("1234"),pais='China', nombre="Admin", apellido="admin",fecha_nacimiento="1/1/1900",genero="no binario",estado_civil="viudo" ,saldo=999999)
        u2 = Usuario(user="Franco", email="francopascu7@gmail.com", password=generate_password_hash("123456"),pais='Argentina', nombre="Franco", apellido="Pascua",fecha_nacimiento="9/9/2001",genero="Masculino",estado_civil="Soltero", saldo=5000)
        u3 = Usuario(user="Martina", email="Martina@gmail.com", password=generate_password_hash("123456"),pais='Argentina', nombre="Martina", apellido="Masanes",fecha_nacimiento="9/9/1990",genero="Femenino",estado_civil="Soltero", saldo=5000)
        u4 = Usuario(user="Ulises", email="ulises7@gmail.com", password=generate_password_hash("123456"),pais='Argentina', nombre="Ulises", apellido="Gunetti",fecha_nacimiento="9/9/2005",genero="Masculino",estado_civil="Soltero" ,saldo=5000)
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
    return render_template('transferencias.html')

@app.route('/ajustes_varios')
def ajustes_varios():
    return render_template('ajustes.html')

@app.route('/modificar_datos')
def modificar_datos():
    return render_template('cambio_datos_personales.html')

@app.route('/delete_cuenta')
def delete_cuenta():
    return render_template('eliminar_cuenta.html')

@app.route('/terminos')
def terminos():
    return render_template('terminos_condiciones.html')

@app.route('/politica')
def politica():
    return render_template('politica_privacidad.html')


# # API login
@app.route('/api/login', methods=['POST'])
def api_login():
    data = request.json
    usuario_input = data.get("usuario")
    password_input = data.get("clave")
    usuario1 = Usuario.query.filter_by(user=usuario_input).first()
    if usuario1 and check_password_hash(usuario1.password, password_input):
        return jsonify({
            'status': 'ok',
            "nombre": usuario1.nombre,
            "apellido": usuario1.apellido,
            "email": usuario1.email,
            "saldo": usuario1.saldo,
            "id":usuario1.id,
            "user": usuario1.user
        })
    return jsonify({'status': 'error'}), 401

# # API registro
@app.route('/api/registro', methods=['POST'])
def api_registro():
    data = request.get_json()

    usuario = data.get("usuario")
    clave = data.get("clave")
    nombre = data.get("nombre")
    apellido = data.get("apellido")
    email = data.get("email")
    genero = data.get("genero")
    estado_civil = data.get("estado_civil")
    fecha_nacimiento = data.get("fecha_nacimiento")
    pais=data.get('pais')

    # Validar que no exista ya el usuario o el email
    if Usuario.query.filter_by(user=usuario).first():
        return jsonify({'status': 'error', 'mensaje': 'Nombre de usuario ya registrado'}), 400
    if Usuario.query.filter_by(email=email).first():
        return jsonify({'status': 'error', 'mensaje': 'Email ya registrado'}), 400

    nuevo_usuario = Usuario(user=usuario, email=email, password=generate_password_hash(clave),pais=pais, nombre=nombre, apellido=apellido,fecha_nacimiento=fecha_nacimiento,genero=genero,estado_civil=estado_civil,saldo=0)
    db.session.add(nuevo_usuario)
    db.session.commit()
    return jsonify({'status': 'ok'})

#API cambio de datos personales
@app.route('/api/usuarios/<int:id>', methods=['PUT'])
def api_modificar_datos(id):
    datos = request.get_json()
    usuario = Usuario.query.get(id)

    if not usuario:
        return jsonify({'error': 'Usuario no encontrado'}), 404

    usuario.nombre = datos.get('nombre', usuario.nombre)
    usuario.apellido = datos.get('apellido', usuario.apellido)
    usuario.fecha_nacimiento = datos.get('fecha_nacimiento', usuario.fecha_nacimiento)
    usuario.genero = datos.get('genero', usuario.genero)
    usuario.estado_civil = datos.get('estado_civil', usuario.estado_civil)
    usuario.email = datos.get('email', usuario.email)
    usuario.user = datos.get('user', usuario.user)
    usuario.password = datos.get('password', usuario.password)

    db.session.commit()
    return jsonify({'mensaje': 'Usuario actualizado correctamente'})


# # API eliminar cuenta
@app.route('/api/usuarios/eliminar', methods=['POST'])
def delete_usuario_completo():
    datos = request.get_json()

    nombre_usuario = datos.get('usuario')
    clave = datos.get('clave')

    if not nombre_usuario or not clave:
        return jsonify({'error': 'Faltan datos'}), 400

    usuario = Usuario.query.filter_by(user=nombre_usuario).first()

    if not usuario:
        return jsonify({'error': 'Usuario no encontrado'}), 404

    if not check_password_hash(usuario.password, clave):
        return jsonify({'error': 'Clave incorrecta'}), 401

    for t in Transferencia.query.filter_by(emisor_id=usuario.id).all():
        db.session.delete(t)

    for t in Transferencia.query.filter_by(receptor_id=usuario.id).all():
        db.session.delete(t)

    db.session.delete(usuario)
    db.session.commit()

    return jsonify({'mensaje': f'Cuenta y datos de {nombre_usuario} eliminados correctamente'})



# # API transferencia
@app.route('/api/transfer', methods=['POST'])
def api_transfer():
    data = request.json
    usuario_origen = data.get('origen')
    usuario_destino = data.get('destino')
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

    origen.saldo -= monto
    destino.saldo += monto
    db.session.commit()

    return jsonify({'status': 'ok','monto': origen.saldo ,'mensaje': f'Transferidos {monto} de {usuario_origen} a {usuario_destino}'})

if __name__ == '__main__':
    app.run(debug=True)
