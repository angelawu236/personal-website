import Image from "next/image";

export default function Home() {
    return (
        <div className="p-10 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-row gap-8 items-center sm:items-start">
                <Image
                    className="dark:invert"
                    src="/pfp.jpg"
                    alt="profile picture"
                    width={300}
                    height={300}
                    priority
                />
                <a>
                    Hi! My name is Angela, and I'm a Mathematics-Computer Science major at UC San Diego (2027), minoring in Data Science. A few clubs I'm apart of include Computer 
                    Science and Engineering Society (CSES) and Students for the Exploration and Development of Space (SEDS). I'm from San Jose, CA and in my free time I enjoy
                    reading, watching movies and traveling when I can. 
                </a>
            </main>
        </div>
    );
}
