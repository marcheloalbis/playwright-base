
# Proyecto de Pruebas Automatizadas con Playwright

Este proyecto está configurado para realizar pruebas automatizadas utilizando **Playwright** en el sitio web [SauceDemo](https://www.saucedemo.com/). El proyecto está escrito en **TypeScript** y ya está configurado para generar reportes HTML y trazar las pruebas.

## Prerrequisitos

Antes de comenzar, asegúrate de tener lo siguiente instalado en tu máquina:

- **Node.js** (Versión 14 o superior): [Descargar aquí](https://nodejs.org/en/download/)
- **Visual Studio Code**: [Descargar aquí](https://code.visualstudio.com/)

## Instrucciones para configurar el proyecto

Sigue los pasos a continuación para poner en marcha el proyecto.

### 1. Clonar o copiar el proyecto

1. Clona o descarga el proyecto en tu máquina local.
2. Abre la carpeta del proyecto en **Visual Studio Code**.

### 2. Instalar dependencias

Después de abrir el proyecto en **VSCode**, abre la terminal integrada (puedes usar el atajo `Ctrl + Ñ` o `Terminal > Nuevo terminal` desde el menú) y ejecuta el siguiente comando para instalar las dependencias:

```bash
npm install
```

Este comando instalará todas las dependencias listadas en `package.json`, incluyendo Playwright y TypeScript.

### 3. Instalar navegadores para Playwright

Playwright requiere la instalación de navegadores para ejecutar las pruebas. Ejecuta el siguiente comando para descargar e instalar los navegadores que usarás (como Chromium, Firefox, etc.):

```bash
npx playwright install
```

### 4. Ejecutar las pruebas

Una vez que las dependencias y los navegadores estén instalados, puedes ejecutar las pruebas utilizando el siguiente comando:

```bash
npx playwright test
```

Este comando ejecutará todas las pruebas en el directorio `./tests` y generará un reporte HTML.

### 5. Ver el reporte HTML

Después de ejecutar las pruebas, puedes ver el reporte HTML generado ejecutando el siguiente comando:

```bash
npx playwright show-report
```

Esto abrirá el reporte HTML en tu navegador, donde podrás ver el resumen de las pruebas ejecutadas.


## Estructura del Proyecto

- **tests/**: Aquí es donde se encuentran los archivos de prueba `.spec.ts`.
- **src/**: Código auxiliar o módulos reutilizables, como clases.
- **playwright.config.ts**: Archivo de configuración de Playwright.
- **tsconfig.json**: Archivo de configuración de TypeScript.
- **reports/**: Carpeta donde se generarán los reportes HTML de las pruebas.

### Configuración del Proyecto

El archivo `playwright.config.ts` está configurado con las siguientes opciones importantes:

- **baseURL**: `https://www.saucedemo.com` (punto de partida para las pruebas).
- **headless**: `false` (para mostrar el navegador durante las pruebas).
- **trace**: `'on'` (captura trazas para todas las pruebas).
- **screenshot**: `'only-on-failure'` (toma capturas de pantalla solo si la prueba falla).
- **retries**: `0` (sin reintentos automáticos para las pruebas fallidas).

Si deseas ajustar alguna de estas configuraciones, puedes hacerlo en el archivo `playwright.config.ts`.

## Scripts adicionales

En el futuro, podrías agregar más scripts en el archivo `package.json` para simplificar la ejecución de pruebas. Por ejemplo:

```json
"scripts": {
  "test": "npx playwright test",
  "report": "npx playwright show-report",
  "trace": "npx playwright show-trace"
}
```

Con estos scripts, podrías ejecutar los comandos con `npm run test`, `npm run report`, o `npm run trace` en lugar de los comandos completos.

