# Portfolio StoryChara

Este repositorio contiene la arquitectura completa de mi portafolio personal, dividida en un cliente interactivo y una API de servicios.

## 🔗 Enlaces del Proyecto

* **Frontend (Live):** [https://portfolio-storychara.vercel.app/](https://portfolio-storychara.vercel.app/)
* **Backend (Docs):** [https://back-portfolio-storychara.vercel.app/docs](https://back-portfolio-storychara.vercel.app/docs)

---

## 🛠️ Stack Tecnológico

### FrontEnd (React)
* **Framework:** React.js
* **Estilos:** CSS Modules
* **Gestión de Datos:** Integración con **Supabase API**
* **Despliegue:** Vercel

### BackEnd (Python)
* **Lenguaje:** Python 3.13
* **Documentación:** Swagger
* **Despliegue:** Vercel.

---

## 📂 Estructura del Proyecto

```bash
portfolio-storychara/
├── BackEnd/                # API Service (Python)
│   ├── main.py             # Punto de entrada de la aplicación
│   ├── requirements.txt    # Dependencias de Python
│   └── swagger.yaml        # Definición de la API
└── FrontEnd/               # Interfaz de Usuario (React)
    ├── public/             # Archivos estáticos y manifiesto
    ├── src/
    │   ├── components/     # Navbar, Footer y elementos visuales
    │   ├── routes/         # Páginas principales (Home, Projects, Skills, Contact)
    │   └── util/           # Lógica de datos (Supabase, Certificaciones, CV)
    └── package.json        # Dependencias de Node.js
```

---

## 🚀 Configuración Local

### Preparación del BackEnd
```
cd BackEnd
pip install -r requirements.txt
python main.py
```

### Preparación del FrontEnd
```
cd FrontEnd
npm install
npm start
```

---

## ✨ Características Detalladas

* **Modularidad:** Uso de componentes funcionales en React para una fácil mantenibilidad.
* **Integración con Supabase:** Gestión de base de datos para contenido dinámico.
* **API Documentada:** El backend expone su estructura mediante Swagger, facilitando el testeo de endpoints.
* **Visualización de CV:** Incluye lógica para modales de visualización de currículum y certificaciones.

---

## 👤 Autor

* **GitHub:** [@StoryChara](https://github.com/StoryChara)