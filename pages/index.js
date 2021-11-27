import Nav from "../components/Nav"
import Hero from "../components/Hero"
import styles from "../styles/App.module.scss"

export default function Home() {
  return (
    <div className={styles.app} >
      <Hero/>
    </div>
  )
}
