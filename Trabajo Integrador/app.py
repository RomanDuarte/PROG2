from flask import Flask, render_template, request, jsonify

app = Flask(__name__)



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

# API para login (ejemplo)
@app.route('/api/login', methods=['POST'])
def api_login():
    data = request.json
    usuario1 = data.get('usuario')
    clave1 = data.get('clave')
    usuarios={
    "franco":{"password":"123456","nombre":"Franco","apellidos":"Pascua","saldo":5000},
    "ulises":{"password":"123456","nombre":"Ulises","apellidos":"","saldo":5000},
    "martina":{"password":"123456","nombre":"Martina","apellidos":"Masanes","saldo":7000}
    }
    user=usuarios.get(usuario1)
    if user and user["password"]==clave1 :
        return jsonify({'status': 'ok',
                        "nombre":user["nombre"],
                        "apellido":user["apellidos"],
                        "email":usuario1,
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
