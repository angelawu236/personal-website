import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="flex flex-row gap-8 items-start">
        <Image
          src="/pfp.jpg"
          alt="profile picture"
          width={300}
          height={380}
        />
        <p>
          Hi! My name is Angela, and I'm a Mathematics-Computer Science major at UC San Diego (2028),
          minoring in Data Science. A few clubs I'm a part of include Computer Science and Engineering
          Society (CSES) and Students for the Exploration and Development of Space (SEDS). I'm from
          San Jose, CA and in my free time I enjoy reading, watching movies, and traveling when I can.
        </p>
      </div>
    </main>
  );
}
