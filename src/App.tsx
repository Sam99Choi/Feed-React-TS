import { Post, PostType } from "./components/Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";


import "./global.css";

import styles from "./App.module.css";

// author {avatar_url "", name, role: ""}
// publishAt: Date
// content: String

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/jeeonglee1.png",
      name: "Jeong Lee",
      role: "Front End Developer",
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "👉 jeong.design/doctorcare" },
    ],
    publishedAt: new Date("2023-05-03 14:37:15"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/pablogravielseo.png",
      name: "Pablo Seo",
      role: "FullStack Developer",
    },
    content: [
      { type: "paragraph", content: "Fala, pessoal! 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz sozinho, com muito esforço. O nome do projeto é Fintechs 🚀",
      },
      { type: "link", content: "👉 pablo.design/fintechs" },
    ],
    publishedAt: new Date("2023-05-10 14:30:00"),
  },
];

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                post={post}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}

export default App;
