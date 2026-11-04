# 🏨 Hotel Vasquez - Aplicación Web en React

Página web de un hotel básica desarrollada en React siguiendo la estructura y componentes solicitados.

---

## 📁 Estructura del Proyecto

```text
PagHotel/
├── Miapp/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.jsx       # Encabezado, navegación y hero con buscador
│   │   │   ├── Header.css
│   │   │   ├── About.jsx        # Sobre nosotros, historia y amenidades del hotel
│   │   │   ├── About.css
│   │   │   ├── Contac.jsx       # Formulario interactivo de contacto y datos
│   │   │   ├── Contac.css
│   │   │   ├── Raauter.jsx      # Componente con las 4 habitaciones y modales
│   │   │   ├── Raauter.css
│   │   │   ├── Contact.jsx      # Alias de exportación
│   │   │   └── Router.jsx       # Alias de exportación
│   │   ├── App.jsx              # Integración de los 4 componentes
│   │   ├── App.css
│   │   ├── index.css
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
├── .gitignore
├── package.json                 # Scripts de conveniencia en raíz
└── README.md
```

---

## 🛏️ Las 4 Habitaciones (Raauter)

1. **Habitación Individual Clásica:** Cama individual, escritorio, baño privado, $45/noche.
2. **Habitación Doble Superior:** Cama Queen Size, balcón con vista al jardín tropical, frigobar, $80/noche.
3. **Junior Suite Familiar:** Cama King + 2 camas twin, 2 ambientes, 2 baños completos, $130/noche.
4. **Master Suite Presidencial:** Cama King Ultra-Lujo, terraza privada con jacuzzi frente al mar, mayordomo, $220/noche.

---

## 🚀 Cómo Ejecutar la Aplicación

Puedes ejecutar el proyecto desde la raíz `PagHotel` o dentro de `Miapp`:

### Opción 1: Desde la raíz `PagHotel`
```bash
npm run dev
```

### Opción 2: Dentro de `Miapp`
```bash
cd Miapp
npm run dev
```

Abre tu navegador en la URL indicada en la consola (por defecto `http://localhost:5173`).
