import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    { text: 'Início', href: getPermalink('/') },
    { text: 'Projetos', href: getPermalink('/projetos') },
    { text: 'Sobre', href: getPermalink('/sobre') },
    { text: 'Contato', href: getPermalink('/contato') },
  ],
  actions: [
    {
      text: 'Ver Portfólio',
      href: getPermalink('/projetos'),
      ariaLabel: 'Acessar o portfólio de projetos de Regiane Gimenez',
    },
  ],
};

export const footerData = {
  links: [
    {
      title: 'Site',
      links: [
        { text: 'Início', href: getPermalink('/') },
        { text: 'Projetos', href: getPermalink('/projetos') },
        { text: 'Sobre', href: getPermalink('/sobre') },
        { text: 'Contato', href: getPermalink('/contato') },
      ],
    },
    {
      title: 'Informações Legais',
      links: [
        { text: 'Política de Privacidade', href: getPermalink('/privacy') },
        { text: 'Termos de Uso', href: getPermalink('/terms') },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Termos de Uso', href: getPermalink('/terms') },
    { text: 'Política de Privacidade', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://instagram.com/' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://facebook.com/' },
    { ariaLabel: 'WhatsApp', icon: 'tabler:brand-whatsapp', href: 'https://wa.me/seunumero' },
  ],
  footNote: `
    <span>© ${new Date().getFullYear()} Regiane Gimenez | Arquiteta. Todos os direitos reservados.</span>
  `,
};
