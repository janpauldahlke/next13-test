import styles from '@/styles/content-area/Content.module.css'
import Header from '@/components/Header/Header';
import Entry from '@/components/LoremEntry/Entry';

export default function Home() {
  
  return (
    <>
      <Header />
      <main className={ styles.test}>
        <h3>hello hedi content area</h3>
        <Entry></Entry>
      </main>
    </>
  )
}
