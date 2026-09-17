export interface TalkStep {
  id: string;
  number: number;
  title: {
    en: string;
    es: string;
  };
  description: {
    en: string;
    es: string;
  };
  content: {
    en: string;
    es: string;
  };
}

export const talkSteps: TalkStep[] = [
  {
    id: 'setup',
    number: 1,
    title: {
      en: 'Initial Setup',
      es: 'Configuración Inicial'
    },
    description: {
      en: 'Install tools and clone the repository.',
      es: 'Instala las herramientas y clona el repositorio.'
    },
    content: {
      en: `
        <div class="space-y-4">
          <p>Welcome to the first step! Let's get everything ready.</p>
          <ul class="list-disc pl-5 space-y-2 text-zinc-300">
            <li>Ensure Cursor is installed and logged in.</li>
            <li>Clone the repository from GitHub.</li>
            <li>Run <code>npm install</code> to install dependencies.</li>
          </ul>
          <p class="text-sm text-zinc-500 mt-4">* Provisional content for workshop</p>
        </div>
      `,
      es: `
        <div class="space-y-4">
          <p>¡Bienvenido al primer paso! Prepararemos todo el entorno.</p>
          <ul class="list-disc pl-5 space-y-2 text-zinc-300">
            <li>Asegúrate de tener Cursor instalado y con sesión iniciada.</li>
            <li>Clona el repositorio desde GitHub.</li>
            <li>Ejecuta <code>npm install</code> para instalar las dependencias.</li>
          </ul>
          <p class="text-sm text-zinc-500 mt-4">* Contenido provisional para el workshop</p>
        </div>
      `
    }
  },
  {
    id: 'supabase-project',
    number: 2,
    title: {
      en: 'Supabase Project',
      es: 'Proyecto Supabase'
    },
    description: {
      en: 'Create your database and get API keys.',
      es: 'Crea tu base de datos y obtén las claves de API.'
    },
    content: {
      en: `
        <div class="space-y-4">
          <p>Time to configure our backend as a service.</p>
          <ol class="list-decimal pl-5 space-y-2 text-zinc-300">
            <li>Go to the Supabase Dashboard and create a new project.</li>
            <li>Wait for the database to provision.</li>
            <li>Copy the <code>Project URL</code> and <code>anon key</code> to your <code>.env</code> file.</li>
          </ol>
        </div>
      `,
      es: `
        <div class="space-y-4">
          <p>Es hora de configurar nuestro backend.</p>
          <ol class="list-decimal pl-5 space-y-2 text-zinc-300">
            <li>Ve al Dashboard de Supabase y crea un nuevo proyecto.</li>
            <li>Espera a que la base de datos se aprovisione.</li>
            <li>Copia la <code>Project URL</code> y la <code>anon key</code> a tu archivo <code>.env</code>.</li>
          </ol>
        </div>
      `
    }
  },
  {
    id: 'auth-setup',
    number: 3,
    title: {
      en: 'Authentication',
      es: 'Autenticación'
    },
    description: {
      en: 'Configure Github OAuth login.',
      es: 'Configura el login con Github OAuth.'
    },
    content: {
      en: `
        <div class="space-y-4">
          <p>Secure your app with GitHub authentication.</p>
          <ul class="list-disc pl-5 space-y-2 text-zinc-300">
            <li>Enable GitHub Provider in Supabase Auth settings.</li>
            <li>Create a new OAuth App in GitHub Developer Settings.</li>
            <li>Paste the Client ID and Secret back into Supabase.</li>
          </ul>
        </div>
      `,
      es: `
        <div class="space-y-4">
          <p>Protege tu aplicación con autenticación de GitHub.</p>
          <ul class="list-disc pl-5 space-y-2 text-zinc-300">
            <li>Habilita el proveedor de GitHub en los ajustes de Supabase Auth.</li>
            <li>Crea una nueva OAuth App en los ajustes de desarrollador de GitHub.</li>
            <li>Pega el Client ID y Secret en Supabase.</li>
          </ul>
        </div>
      `
    }
  },
  {
    id: 'db-schema',
    number: 4,
    title: {
      en: 'Database Schema',
      es: 'Esquema de BD'
    },
    description: {
      en: 'Create tables using Cursor AI.',
      es: 'Crea las tablas usando la IA de Cursor.'
    },
    content: {
      en: `
        <div class="space-y-4">
          <p>Let's use AI to generate our SQL schema.</p>
          <ol class="list-decimal pl-5 space-y-2 text-zinc-300">
            <li>Open the Cursor Chat (Cmd+L / Ctrl+L).</li>
            <li>Ask it to generate a SQL schema for a products marketplace.</li>
            <li>Run the generated SQL in the Supabase SQL Editor.</li>
          </ol>
        </div>
      `,
      es: `
        <div class="space-y-4">
          <p>Vamos a usar la IA para generar nuestro esquema SQL.</p>
          <ol class="list-decimal pl-5 space-y-2 text-zinc-300">
            <li>Abre el Chat de Cursor (Cmd+L / Ctrl+L).</li>
            <li>Pídele que genere un esquema SQL para un marketplace de productos.</li>
            <li>Ejecuta el SQL generado en el SQL Editor de Supabase.</li>
          </ol>
        </div>
      `
    }
  },
  {
    id: 'frontend-dev',
    number: 5,
    title: {
      en: 'Frontend UI',
      es: 'Interfaz Frontend'
    },
    description: {
      en: 'Build the application UI components.',
      es: 'Construye los componentes de la interfaz.'
    },
    content: {
      en: `
        <div class="space-y-4">
          <p>Time to build the visual part of the project.</p>
          <ul class="list-disc pl-5 space-y-2 text-zinc-300">
            <li>Use the Composer tool in Cursor to generate React components.</li>
            <li>Integrate the Supabase JS client to fetch data.</li>
            <li>Style the components with Tailwind CSS.</li>
          </ul>
        </div>
      `,
      es: `
        <div class="space-y-4">
          <p>Hora de construir la parte visual del proyecto.</p>
          <ul class="list-disc pl-5 space-y-2 text-zinc-300">
            <li>Usa la herramienta Composer en Cursor para generar componentes React.</li>
            <li>Integra el cliente JS de Supabase para obtener datos.</li>
            <li>Estiliza los componentes con Tailwind CSS.</li>
          </ul>
        </div>
      `
    }
  },
  {
    id: 'deployment',
    number: 6,
    title: {
      en: 'Deployment',
      es: 'Despliegue'
    },
    description: {
      en: 'Publish your app to Vercel.',
      es: 'Publica tu aplicación en Vercel.'
    },
    content: {
      en: `
        <div class="space-y-4">
          <p>Share your creation with the world!</p>
          <ol class="list-decimal pl-5 space-y-2 text-zinc-300">
            <li>Push your final code to your GitHub repository.</li>
            <li>Log in to Vercel and import your repository.</li>
            <li>Add your Supabase environment variables.</li>
            <li>Click Deploy and wait for the magic to happen. 🎉</li>
          </ol>
        </div>
      `,
      es: `
        <div class="space-y-4">
          <p>¡Comparte tu creación con el mundo!</p>
          <ol class="list-decimal pl-5 space-y-2 text-zinc-300">
            <li>Haz push de tu código final a tu repositorio de GitHub.</li>
            <li>Inicia sesión en Vercel e importa tu repositorio.</li>
            <li>Añade tus variables de entorno de Supabase.</li>
            <li>Haz clic en Deploy y espera a que suceda la magia. 🎉</li>
          </ol>
        </div>
      `
    }
  }
];
