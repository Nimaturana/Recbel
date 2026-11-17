# Recbel Studios

Sitio de presentación para Recbel Studios, preparado para editarse en Lovable y conectar una agenda de Cal.com.

## Desarrollo local

```bash
npm install
npm run dev
```

## Conectar Cal.com

1. Crea en Cal.com los tipos de evento de Recbel.
2. Copia `.env.example` como `.env.local`.
3. Pega la URL pública del evento:

```env
VITE_CALCOM_URL=https://cal.com/usuario/evento
```

Los botones “Agendar” abrirán el calendario dentro del sitio. Mientras la variable esté vacía, aparece una vista previa informativa.

## Datos de contacto

Edita `src/config.ts` para agregar:

- correo;
- WhatsApp;
- Instagram y TikTok ya están configurados como `@recbel.studios`.

Los enlaces vacíos no se muestran, evitando publicar información inventada.

## Llevarlo a Lovable

Sube `recbel-lovable.zip` usando la opción de importar proyecto desde ZIP. Después puedes continuar cambiando textos, estilos y secciones mediante el chat de Lovable.

También puedes crear primero un proyecto en Lovable, conectarlo a GitHub y copiar este código al repositorio que Lovable crea. La sincronización es bidireccional sobre la rama activa.

## Compilar

```bash
npm run build
```

El resultado estático se genera en `dist/` y se puede publicar en Cloudflare, Netlify o el hosting de Lovable.
