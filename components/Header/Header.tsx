
import Link from 'next/link';
import styles from '@/styles/Header.module.css'

export default function Header() {
  return (
    <>
      <section className={styles.header}>
        <div>
          <h4>some hedi</h4>
        </div>
        <ul className={styles.links}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/content-area">content</Link>
          </li>
       </ul>
      </section>
    </>
  )
}
