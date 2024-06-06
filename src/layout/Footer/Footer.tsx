import Link from 'next/link';
import React from 'react'

import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { CgDarkMode } from "react-icons/cg";



import s from './Footer.module.scss'

const Footer = () => {
    return (
        <>
            <footer className={s.footer}>
                <div className="container">
                    <div className={s.wrapper}>
                        <div className={s.inner}>
                            <p className={s.ci}>© 2024</p>

                            <div className={s.soc}>
                                <FaGithub />
                                <FaXTwitter />
                            </div>
                        </div>

                        <div className={s.grid}>
                            <div className={s.inner}>
                                <h3>Название</h3>

                                <div className={s.links}>
                                    <Link href={'/'}>Ссылка</Link>
                                    <Link href={'/'}>Ссылка</Link>
                                    <Link href={'/'}>Ссылка</Link>
                                    <Link href={'/'}>Ссылка</Link>
                                    <Link href={'/'}>Ссылка</Link>
                                </div>
                            </div>

                            <div className={s.inner}>
                                <h3>Название</h3>

                                <div className={s.links}>
                                    <Link href={'/'}>Ссылка</Link>
                                    <Link href={'/'}>Ссылка</Link>
                                    <Link href={'/'}>Ссылка</Link>
                                    <Link href={'/'}>Ссылка</Link>
                                    <Link href={'/'}>Ссылка</Link>
                                </div>
                            </div>

                            <div className={s.inner}>
                                <h3>Название</h3>

                                <div className={s.links}>
                                    <Link href={'/'}>Ссылка</Link>
                                    <Link href={'/'}>Ссылка</Link>
                                    <Link href={'/'}>Ссылка</Link>
                                    <Link href={'/'}>Ссылка</Link>
                                    <Link href={'/'}>Ссылка</Link>
                                </div>
                            </div>

                            <div className={s.inner}>
                                <h3>Название</h3>

                                <div className={s.links}>
                                    <Link href={'/'}>Ссылка</Link>
                                    <Link href={'/'}>Ссылка</Link>
                                    <Link href={'/'}>Ссылка</Link>
                                    <Link href={'/'}>Ссылка</Link>
                                    <Link href={'/'}>Ссылка</Link>
                                </div>
                            </div>

                            <div className={s.inner}>
                                <h3>Название</h3>

                                <div className={s.links}>
                                    <Link href={'/'}>Ссылка</Link>
                                    <Link href={'/'}>Ссылка</Link>
                                    <Link href={'/'}>Ссылка</Link>
                                    <Link href={'/'}>Ссылка</Link>
                                    <Link href={'/'}>Ссылка</Link>
                                </div>
                            </div>

                            <div className={s.inner}>
                                <h3>Название</h3>

                                <div className={s.links}>
                                    <Link href={'/'}>Ссылка</Link>
                                    <Link href={'/'}>Ссылка</Link>
                                    <Link href={'/'}>Ссылка</Link>
                                    <Link href={'/'}>Ссылка</Link>
                                    <Link href={'/'}>Ссылка</Link>
                                </div>
                            </div>
                        </div>

                        <div className={s.inner}>
                            <div className={s.theme}>
                                <CgDarkMode />

                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer