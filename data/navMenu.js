export const NavMenu = [
    { name: 'Home', href: '/', current: true },
    {
        name: 'About us', href: '', current: false, subItems: [
            { name: `Chairman's Message`, href: '/chairman-message', current: false },
            { name: 'Our Team', href: '/our-team', current: false },
            { name: 'About Us', href: '/about-us', current: false },
        ]
    },
    {
        name: 'Awards & Recognitions', href: '', current: false, subItems: [
            { name: `Government Partners`, href: '/awards-and-recognitions/government-partnership', current: false },
            { name: `Placement Partners`, href: '/awards-and-recognitions/placement-partners', current: false },
            { name: `Industry Partners`, href: '/awards-and-recognitions/industry-partners', current: false },
            { name: `Our  Approvals`, href: '/awards-and-recognitions/awards-and-approvals', current: false },
        ]
    },
    {
        name: 'Our services', href: '', current: false, subItems: [
            { name: `Projects`, href: '/our-projects', current: false },
            { name: 'Our Specialties', href: '/our-specialities', current: false },
        ]
    },
    { name: 'Gallery', href: '/gallery', current: false },
    { name: 'Contact Us', href: '/contact-us', current: false },
];
