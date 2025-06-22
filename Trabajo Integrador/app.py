from flask import Flask, render_template, request, jsonify

app = Flask(__name__)



# Rutas que cargan el HTML
@app.route('/')
def index():
    return render_template('pagina_principal.html')

@app.route('/login')
def login():
    return render_template('Iniciarsecion.html')

@app.route('/inicio')
def inicio():
    return render_template('inicio.html')

@app.route('/transfer')
def transfer():
    return render_template('transfer.html')

# API para login (ejemplo)
@app.route('/api/login', methods=['POST'])
def api_login():
    data = request.json
    usuario = data.get('usuario')
    clave = data.get('clave')
    usuarios={
    "francopascua7@gmail.com":{"password":"123456","nombre":"Franco","apellidos":"Pascua","saldo":5000},
    "ulises1@gmail.com":{"password":"123456","nombre":"Ulises","apellidos":"","saldo":5000},
    "martina1@gmail.com":{"password":"123456","nombre":"Martina","apellidos":"Masanes","saldo":7000}
    }
    user=usuarios.get(usuario)
    if user and user["password"]==clave :
        return jsonify({'status': 'ok',
                        "nombre":user["nombre"],
                        "apellido":user["apellidos"],
                        "email":usuario,
                        "saldo":user["saldo"],
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
