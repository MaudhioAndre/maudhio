import React from "react";
import Image from "next/image";
import Head from "next/head";
import ProfilImage from "../public/images/profil.jpeg";
import {
  User,
  Code,
  Briefcase,
  Mail,
  Linkedin,
  Github,
  Zap,
  BookOpen,
} from "lucide-react";

export const metadata = {
  title: "Maudhio Andre Wijaya",
  description: "Website developer",
};

// === Data Profil ===
const profileData = {
  name: "Maudhio Andre Wijaya",
  jobs: "Website Developer",
  tagline: "Menciptakan Pengalaman Digital yang Berarti.",
  bio: "Saya adalah seorang Website Developer yang berpengalaman dalam membangun aplikasi web modern menggunakan React.js, Next.js, Vue.js dll. Fokus saya adalah menciptakan website cepat, ramah SEO, dan memiliki pengalaman pengguna yang optimal.",
  location: "Bogor, Indonesia",
  skills: [
    { name: "React.js", color: "text-white bg-blue-700", icon: <Code /> },
    { name: "Next.js", color: "text-white bg-gray-700", icon: <Code /> },
    { name: "Redux", color: "text-white bg-purple-700", icon: <Code /> },
    { name: "Vue.js", color: "text-white bg-green-600", icon: <Code /> },
    { name: "CSS / SCSS", color: "text-white bg-teal-700", icon: <Code /> },
    { name: "Tailwind CSS", color: "text-white bg-teal-800", icon: <Code /> },
    { name: "PHP Native", color: "text-white bg-indigo-700", icon: <Code /> },
    { name: "MySQL", color: "text-white bg-yellow-700", icon: <Code /> },
    { name: "GIT", color: "text-white bg-red-700", icon: <Code /> },
    { name: "Unit Testing", color: "text-white bg-sky-700", icon: <Code /> },
    {
      name: "Black box testing",
      color: "text-white bg-lime-700",
      icon: <Code />,
    },
  ],
  experience: [
    {
      title: "Frontend Website Developer",
      company: "PT MARDAWA INTIGUNA PERSADA - JAKARTA, Indonesia",
      years: "Mei 2025 - Sekarang",
      desc: "Membangun tampilan website modern menggunakan React.js dan Tailwind CSS, termasuk fitur interaktif seperti Datatable, Form, dan List Data.",
    },
    {
      title: "Fullstack Website Developer",
      company: "PT GUGUS KARANG MEKAR - Bogor, Indonesia",
      years: "Mei 2019 - Maret 2022",
      desc: "Membuat sistem CMS berbasis React.js dan PHP Native, merancang REST API, mengelola database MySQL, serta menerapkan pengujian Blackbox Testing.",
    },
  ],
  education: {
    university: "UNIVERSITAS BINANIAGA INDONESIA",
    years: "2020 - 2024",
    major: "Sarjana Teknik Informatika",
    gpa: "3.51 / 4.00",
  },
  socials: {
    email: "maudhioa@gmail.com",
    linkedinUrl: "https://www.linkedin.com/in/maudhio-andre-28167a224/",
    githubUrl: "https://github.com/MaudhioAndre",
    phone: ["0895704270480", "085817838429"],
  },
  projects: [
    {
      type: "involved",
      name: "SIP Halut",
      link: "https://sip-halmahera-utara.mardawa.id/",
      company: "PT Mardawa Intiguna Persada",
      position: "Frontend Website Developer",
      stack: ["React.js", "HTML", "CSS", "Tailwind CSS"],
      desc: "Website Sistem Informasi Pendidikan Halmahera Utara yang memudahkan dalam mengakses informasi terkait sekolah, murid, dan pengumuman penting lainnya.",
    },
    {
      type: "involved",
      name: "UKS",
      link: "https://uks.kemendikdasmen.go.id/",
      company: "PT Mardawa Intiguna Persada",
      position: "Frontend Website Developer",
      stack: ["React.js", "HTML", "CSS", "Tailwind CSS"],
      desc: "Website ini berfungsi sebagai pusat informasi dan sumber daya mengenai program Usaha Kesehatan Sekolah/Madrasah yang bertujuan untuk meningkatkan pertumbuhan dan perkembangan peserta didik yang harmonis dan optimal, agar menjadi sumber daya manusia yang berkualitas. ",
    },
    {
      type: "involved",
      name: "DOSIS",
      link: "???",
      company: "PT Mardawa Intiguna Persada",
      position: "Frontend Website Developer",
      stack: ["React.js", "HTML", "CSS", "Tailwind CSS"],
      desc: "Website Document system tracker untuk memudahkan dalam pengelolaan dokumen dan pelacakan statusnya secara efisien.",
    },
    {
      type: "involved",
      name: "SPMB Kota Bogor 2025",
      link: "https://spmb-sd.kotabogor.go.id",
      company: "PT Mardawa Intiguna Persada",
      position: "Frontend Website Developer",
      stack: ["React.js", "HTML", "CSS", "Tailwind CSS"],
      desc: "Website Sistem Penerimaan Murid Baru (SPMB) untuk jenjang Sekolah Dasar dan Sekolah Menengah Pertama di Kota Bogor tahun 2025.",
    },
    {
      type: "involved",
      name: "SPMB Kota Palembang 2025",
      link: "https://portal-spmb.palembang.go.id/",
      company: "PT Mardawa Intiguna Persada",
      position: "Frontend Website Developer",
      stack: ["React.js", "HTML", "CSS", "Tailwind CSS"],
      desc: "Website Sistem Penerimaan Murid Baru (SPMB) untuk jenjang Sekolah Dasar dan Sekolah Menengah Pertama di Kota Bogor tahun 2025.",
    },
    {
      type: "involved",
      name: "SPMB Kota Cilegon 2025",
      link: "https://app.spmb-cilegon.id/",
      company: "PT Mardawa Intiguna Persada",
      position: "Frontend Website Developer",
      stack: ["React.js", "HTML", "CSS", "Tailwind CSS"],
      desc: "Website Sistem Penerimaan Murid Baru (SPMB) untuk jenjang Sekolah Dasar dan Sekolah Menengah Pertama di Kota Bogor tahun 2025.",
    },
    {
      type: "involved",
      name: "Dhammawangsa",
      link: "https://Dhammawangsa.org",
      company: "PT Gugus Karang Mekar",
      position: "Fullstack Website Developer",
      stack: ["React.js", "HTML", "CSS&SCSS", "PHP Native", "Mysql"],
      desc: "Membuat sistem CMS berbasis React.js dan PHP Native, merancang REST API, mengelola database MySQL, serta menerapkan pengujian Blackbox Testing.",
    },
    {
      type: "personal",
      name: "MeWeeb",
      link: "https://me-weeb-info.vercel.app/",
      company: "-",
      position: "Frontend Website Developer",
      stack: ["React.js", "HTML", "CSS", "Tailwind CSS"],
      desc: "Website yang menyediakan informasi lengkap tentang anime, manga, dan karakter favorit para penggemar budaya Jepang.",
    },
    {
      type: "personal",
      name: "Movie Vibe",
      link: "https://movievibe-five.vercel.app/",
      company: "-",
      position: "Frontend Website Developer",
      stack: ["Vue.js", "HTML", "CSS", "Tailwind CSS"],
      desc: "Website untuk mencari informasi film berdasarkan genre, tahun rilis, dan rating menggunakan API eksternal.",
    },
  ],
};

// === Komponen Pengalaman ===
const ExperienceCard = ({ title, company, years, desc }) => (
  <div className="border-l-4 border-cyan-500 pl-4 py-2 hover:bg-gray-700/50 rounded-r-lg transition duration-300">
    <h3 className="text-xl font-semibold text-white">{title}</h3>
    <p className="text-cyan-400 italic mb-1">
      {company} ({years})
    </p>
    <p className="text-gray-300 text-sm">{desc}</p>
  </div>
);

// === Komponen Utama ===
export default function App() {
  return (
    <>
      {/* === SEO Metadata === */}
      <Head>
        <title>{`${profileData.name} | ${profileData.jobs}`}</title>
        <meta
          name="description"
          content="Profil resmi Maudhio Andre Wijaya, seorang Website Developer dari Bogor, Indonesia yang berpengalaman dalam React.js, Next.js, Vue.js, dll."
        />
        <meta
          name="keywords"
          content="Maudhio Andre Wijaya, Website Developer, React.js Developer, Next.js, PHP Native, Web Developer Bogor"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content={profileData.name} />

        <link rel="icon" href="../public/images/favicon.ico" sizes="any" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content={`${profileData.name} - ${profileData.jobs}`}
        />
        <meta
          property="og:description"
          content="Website portofolio Maudhio Andre Wijaya, Full-stack Developer dari Indonesia."
        />
        <meta property="og:image" content="/images/profil.jpeg" />
        <meta property="og:url" content="https://me-weeb-info.vercel.app/" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={`${profileData.name} - ${profileData.jobs}`}
        />
        <meta
          name="twitter:description"
          content="Full-stack Developer berpengalaman dalam React.js, Next.js, dan PHP Native."
        />
        <meta name="twitter:image" content="/images/profil.jpeg" />

        {/* Schema JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: profileData.name,
              jobTitle: profileData.jobs,
              url: "https://me-weeb-info.vercel.app/",
              image: "/images/profil.jpeg",
              email: profileData.socials.email,
              sameAs: [
                profileData.socials.linkedinUrl,
                profileData.socials.githubUrl,
              ],
              address: {
                "@type": "PostalAddress",
                addressLocality: "Bogor",
                addressCountry: "Indonesia",
              },
            }),
          }}
        />
      </Head>

      {/* === Konten Utama === */}
      <main className="min-h-screen bg-gray-900 text-gray-100 font-sans p-4 sm:p-8">
        <div className="max-w-5xl mx-auto space-y-10">
          {/* === Header === */}
          <header className="flex flex-col md:flex-row items-center justify-between p-8 bg-gray-800 rounded-2xl shadow-2xl hover:shadow-cyan-500/30 transition duration-500">
            <div className="flex items-center space-x-6">
              <Image
                src={ProfilImage}
                alt="Foto Profil Maudhio Andre Wijaya, Full-stack Developer dari Bogor"
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover"
                priority
              />
              <div>
                <h1 className="text-xl mb-1 sm:text-4xl font-extrabold text-white">
                  {profileData.name}
                </h1>
                <p className="text-sm sm:text-2xl font-light text-cyan-400">
                  {profileData.jobs}
                </p>
              </div>
            </div>

            {/* Link Sosial */}
            <nav
              className="flex space-x-4 mt-6 md:mt-0"
              aria-label="Social Links"
            >
              <a
                href={`mailto:${profileData.socials.email}`}
                className="p-3 rounded-full bg-gray-700 hover:bg-cyan-600 transition duration-200"
                aria-label="Kirim Email"
              >
                <Mail className="w-5 h-5 text-gray-300 hover:text-white" />
              </a>
              <a
                href={profileData.socials.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-700 hover:bg-cyan-600 transition duration-200"
                aria-label="Profil LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-gray-300 hover:text-white" />
              </a>
              <a
                href={profileData.socials.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-700 hover:bg-cyan-600 transition duration-200"
                aria-label="Profil GitHub"
              >
                <Github className="w-5 h-5 text-gray-300 hover:text-white" />
              </a>
            </nav>
          </header>

          {/* === Grid Konten === */}
          <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Kolom Kiri */}
            <aside className="lg:col-span-1 space-y-8">
              {/* Ringkasan */}
              <article className="bg-gray-800 p-6 rounded-xl shadow-xl">
                <h2 className="flex items-center text-2xl font-bold text-cyan-400 mb-4">
                  <User className="w-6 h-6 mr-2" /> Ringkasan
                </h2>
                <p className="text-md leading-relaxed text-gray-300">
                  {profileData.bio}
                </p>
                <p className="text-sm mt-4 text-gray-400">
                  📍 Lokasi: {profileData.location}
                </p>
              </article>

              {/* Pendidikan */}
              <article className="bg-gray-800 p-6 rounded-xl shadow-xl">
                <h2 className="flex items-center text-2xl font-bold text-cyan-400 mb-4">
                  <BookOpen className="w-6 h-6 mr-2" /> Pendidikan
                </h2>
                <h3 className="text-xl font-semibold text-white">
                  {profileData.education.university}
                </h3>
                <p className="text-cyan-400 italic mb-1">
                  {profileData.education.major} ({profileData.education.years})
                </p>
                <p className="text-gray-300 text-sm">
                  IPK: {profileData.education.gpa}
                </p>
              </article>

              {/* === Kontak === */}
              <article className="bg-gray-800 p-6 rounded-xl shadow-xl">
                <h2 className="flex items-center text-lg font-bold text-cyan-400 mb-4">
                  <Mail className="w-6 h-6 mr-2" /> Kontak Langsung
                </h2>
                <p className="text-gray-300">
                  Hubungi saya melalui email untuk peluang kerja atau
                  kolaborasi:
                </p>
                <a
                  href={`mailto:${profileData.socials.email}`}
                  className="block text-cyan-400 hover:text-cyan-300 font-medium mt-2 transition duration-200"
                >
                  {profileData.socials.email}
                </a>
                <p className="text-gray-300 mt-3">Nomor Telepon:</p>
                <ul className="text-cyan-400 font-medium">
                  {profileData.socials.phone.map((num, i) => (
                    <li key={i}>- {num}</li>
                  ))}
                </ul>
              </article>

              {/* Keahlian */}
              <article className="bg-gray-800 p-6 rounded-xl shadow-xl">
                <h2 className="flex items-center text-2xl font-bold text-cyan-400 mb-4">
                  <Code className="w-6 h-6 mr-2" /> Keahlian Teknis
                </h2>
                <div className="flex flex-wrap gap-3">
                  {profileData.skills.map((skill, index) => (
                    <span
                      key={index}
                      className={`flex items-center px-4 py-2 rounded-full text-sm font-medium ${skill.color}`}
                    >
                      {skill.icon}
                      <span className="ml-2">{skill.name}</span>
                    </span>
                  ))}
                </div>
              </article>

              {/* Pengalaman */}
              <article className="bg-gray-800 p-6 rounded-xl shadow-xl">
                <h2 className="flex items-center text-2xl font-bold text-cyan-400 mb-4">
                  <Briefcase className="w-6 h-6 mr-2" /> Pengalaman Kerja
                </h2>
                {profileData.experience.map((exp, index) => (
                  <ExperienceCard key={index} {...exp} />
                ))}
              </article>
            </aside>

            {/* Kolom Kanan */}
            <section className="lg:col-span-2 space-y-8">
              <article className="bg-gray-800 p-6 rounded-xl shadow-xl">
                <h2 className="flex items-center text-2xl font-bold text-cyan-400 mb-4">
                  <Briefcase className="w-6 h-6 mr-2" /> Proyek yang Terlibat
                </h2>

                {/* Projects Involved */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-300 mb-4">
                    Proyek Perusahaan
                  </h3>
                  <div className="space-y-4">
                    {profileData.projects
                      .filter((project) => project.type === "involved")
                      .map((project, index) => (
                        <ProjectCard key={index} project={project} />
                      ))}
                  </div>
                </div>

                {/* Personal Projects */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-300 mb-4">
                    Proyek Pribadi
                  </h3>
                  <div className="space-y-4">
                    {profileData.projects
                      .filter((project) => project.type === "personal")
                      .map((project, index) => (
                        <ProjectCard key={index} project={project} />
                      ))}
                  </div>
                </div>
              </article>
            </section>
          </section>

          {/* Footer */}
          <footer className="text-center text-sm text-gray-500 mt-12 py-4 border-t border-gray-800">
            Dibuat menggunakan Next.js & Tailwind CSS | ©{" "}
            {new Date().getFullYear()} {profileData.name}
          </footer>
        </div>
      </main>
    </>
  );
}

// Component untuk Project Card
const ProjectCard = ({ project }) => (
  <div className="border-l-4 border-cyan-500 pl-4 py-4 hover:bg-gray-700/50 rounded-r-lg transition duration-300">
    <div className="flex flex-wrap items-center gap-2 mb-2">
      <h3 className="text-xl font-semibold text-white">{project.name}</h3>
      <span className="px-2 py-1 text-xs rounded-full bg-cyan-600 text-white">
        {project.position}
      </span>
    </div>
    {project.company != "-" && (
      <p className="text-cyan-400 italic mb-2">{project.company}</p>
    )}

    <div className="flex flex-wrap gap-2 mb-2">
      {project.stack.map((tech, index) => (
        <span
          key={index}
          className="px-2 py-1 text-xs rounded-full bg-gray-700 text-gray-300"
        >
          {tech}
        </span>
      ))}
    </div>
    {project.desc !== "-" && (
      <p className="text-gray-300 text-sm">{project.desc}</p>
    )}
    {project.link !== "???" && (
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center mt-2 text-sm text-cyan-400 hover:text-cyan-300"
      >
        <Zap className="w-4 h-4 mr-1" />
        Lihat Proyek
      </a>
    )}
  </div>
);
