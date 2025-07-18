from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Usuario(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user = db.Column(db.String(120), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), nullable=False)
    nombre = db.Column(db.String(50), nullable=False)
    apellido = db.Column(db.String(50), nullable=False)
    fecha_nacimiento = db.Column(db.String(50), nullable=False)
    pais = db.Column(db.String(50), nullable=False)
    genero = db.Column(db.String(50), nullable=False)
    estado_civil=db.Column(db.String(50), nullable=False)
    saldo = db.Column(db.Float, default=0.0)
    domicilio = db.Column(db.String(80), nullable=False)
    pisoOdepartamento = db.Column(db.String(50), nullable=True)
    ciudad = db.Column(db.String(50), nullable=False)
    provincia = db.Column(db.String(50), nullable=False)

    transferencias_enviadas = db.relationship('Transferencia', foreign_keys='Transferencia.emisor_id', backref='emisor', lazy=True)
    transferencias_recibidas = db.relationship('Transferencia', foreign_keys='Transferencia.receptor_id', backref='receptor', lazy=True)

class Transferencia(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    emisor_id = db.Column(db.Integer, db.ForeignKey('usuario.id'), nullable=False)
    receptor_id = db.Column(db.Integer, db.ForeignKey('usuario.id'), nullable=False)
    monto = db.Column(db.Float, nullable=False)


    