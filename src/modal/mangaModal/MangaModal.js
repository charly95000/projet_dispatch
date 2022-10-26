import React from 'react'
import Modal from '../modal/Modal'
import styles from './MangaModal.module.css'

export default function MangaModal({manga,isShowing, setIsShowing}) {
  return (
    <Modal isShowing={isShowing} setIsShowing={setIsShowing}>
        <article class={styles.mangaModal}>
            <div class={styles.header}>
                <img loading="lazy" alt="indisponible" src="" />
                  <h3>{manga.titre}</h3>
            </div>
            <h4>Contenu pédagogique</h4>
            <div >{manga.description}</div>
        </article>
    </Modal>
  )
}
