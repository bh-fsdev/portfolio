'use client';

function NavItem() {
    const item = [
        { label: "Home", id: "home" },
        { label: "About me", id: "about" },
        { label: "Skills", id: "skills" },
        { label: "Project", id: "project" },
        { label: "Experience", id: "experience" },
        { label: "Contact", id: "contact" },
    ];

    return (
        <div className="flex gap-4">
            {item.map((e, i) => (
                <a
                    key={i}
                    href={`#${e.id}`}
                    className="px-4 rounded-md text-[12px] -tracking-tighter cursor-pointer ease-in-out bg-neutral-50 text-neutral-800/80 hover:bg-white hover:text-black/80 hover:border hover:border-black/20 shadow-[var(--shadow-custom-black-sm)] transition-shadow duration-300 dark:bg-neutral-900 dark:text-neutral-100 dark:hover:bg-neutral-800/40 dark:hover:text-white dark:hover:border dark:hover:border-white/20"
                >
                    {e.label}
                </a>
            ))}
        </div>
    );
}

export default NavItem;
