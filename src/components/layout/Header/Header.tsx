// components/Header.tsx
import React from 'react';
import Link from 'next/link';
import s from './Header.module.scss';

import { useIsClient } from 'usehooks-ts';
import { useTranslation } from 'react-i18next';

// icons
import { HiOutlineMenuAlt4 } from 'react-icons/hi';

const Header = () => {
  const { t, i18n } = useTranslation();
  const isClient = useIsClient();

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <>
      {isClient && (
        <header className={`${s.header}`}>
          <div className='container'>
            <div className={s.wrapper}>
              <Link href={'/'} className={`${s.logo}`}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='lucide lucide-mountain'
                >
                  <path d='m8 3 4 8 5-5 5 15H2L8 3z'></path>
                </svg>

                <h1>Ecommerce VUE</h1>
              </Link>

              <div className={s.menu}>
                <Link href={'/'}>Продукты</Link>
                <Link href={'/'}>Решения</Link>
                <Link href={'/'}>Ресурсы</Link>
                <Link href={'/'}>Предприятия</Link>
                <Link href={'/'}>Документы</Link>
              </div>

              <div className={s.acc}>
                <img src='https://github.com/shadcn.png' alt='User Avatar' />
              </div>
              <div className='lang'>
                <button onClick={() => changeLanguage('en')}>EN</button>
                <button onClick={() => changeLanguage('ru')}>RU</button>
              </div>

              <h1>{t('title')}</h1>

              <div className={s.burger}>
                <HiOutlineMenuAlt4 />
              </div>
            </div>
          </div>
        </header>
      )}
    </>
  );
};

export default Header;
