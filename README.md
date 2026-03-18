# Portfolio StoryChara

Este repositorio contiene la arquitectura completa de mi portafolio personal, dividida en un cliente interactivo y una API de servicios.

## 🔗 Enlaces del Proyecto

* **Frontend (Live):** [https://portfolio-storychara.vercel.app/](https://portfolio-storychara.vercel.app/)
* **Backend (Docs):** [https://back-portfolio-storychara.vercel.app/docs](https://back-portfolio-storychara.vercel.app/docs)

---

## 🛠️ Stack Tecnológico

### FrontEnd (React + Vite)
* **Bundler:** **Vite** (Optimizado para desarrollo rápido)
* **Framework:** React.js
* **Estilos:** React-Bootstrap & CSS Personalizado
* **Gestión de Datos:** Integración con **Supabase API**
* **Iconografía:** FontAwesome 6
* **Despliegue:** Vercel

### BackEnd (Python)
* **Lenguaje:** Python 3.13
* **Documentación:** Swagger / OpenAPI
* **Despliegue:** Vercel

---

## 📂 Estructura del Proyecto

```bash
portfolio-storychara/
├── BackEnd/                # API Service (Python)
│   ├── main.py             # Punto de entrada de la aplicación
│   ├── requirements.txt    # Dependencias de Python
│   └── swagger.yaml        # Definición de la API
└── FrontEnd/               # Interfaz de Usuario (React + Vite)
    ├── public/             # Activos estáticos
    ├── src/
    │   ├── assets/         # Imágenes y recursos locales
    │   ├── components/     # Navbar, Footer y elementos visuales (.jsx)
    │   ├── routes/         # Páginas principales (Home, Projects, Skills, Contact)
    │   ├── util/           # Lógica de datos (Supabase, Certificaciones, CV)
    │   ├── App.jsx         # Componente principal y Router
    │   └── main.jsx        # Punto de entrada de Vite
    ├── .env.example        # Plantilla de variables de entorno
    └── package.json        # Dependencias y scripts de Vite
```

---

## 🚀 Configuración Local

### 1. Preparación del BackEnd
```bash
cd BackEnd
pip install -r requirements.txt
python main.py
```

### 2. Preparación del FrontEnd
Crea un archivo `.env` en la carpeta `FrontEnd` basándote en lo siguiente:
```env
VITE_SUPABASE_URL=tu_url_aqui
VITE_SUPABASE_ANON_KEY=tu_clave_aqui
VITE_API_URL=http://localhost:port
```

Luego, ejecuta los comandos de desarrollo:
```bash
cd FrontEnd
npm install
npm run dev
```

---

## 👤 Autor

* **GitHub:** [@StoryChara](https://github.com/StoryChara)
* **LinkedIn:** [María José Jara Herrera](https://www.linkedin.com/in/mjarah/)