import React from 'react'
import Image from 'next/image';

import TitleClass from '../titleClass'
import { pbbData, classBottomInfos_pbb_col1, classBottomInfos_pbb_col2 } from './pbb-data';
import { PbbContainer, AsideClass, AsideImage } from './style'

import pbbLogo from '../../assets/pbb-logo.jpg'
import RowClass from '../rowClass';
import ClassBottomInfos from '../classBottomInfos';
import RowClassBottom from '../rowClassBottom';

function Pbb() {
  return (
    <PbbContainer id="pbb">
      <TitleClass
        title="Profissional de Beleza e Bem Estar"
        imageUrl={pbbLogo}
        classCss="title__pbb"
      />
      <div className='class_info_bottom'>
        <AsideClass>
          <AsideImage imgUrl='https://raw.githubusercontent.com/thiagosullivan/cuiaba-cebrac/main/assets/img-adm.jpg'>
            <p>Fundamental e perfeito para o<br/>
            mercado de trabalho.</p>
            <p>Conheça mais <span>sobre o curso</span></p>
            <p>Com o CEBRAC no currículo é assim: você mais perto do mercado de trabalho e da realização dos seus sonhos. O CEBRAC conta com educadores especializados e uma metodologia de ensino diferenciada, garantindo uma formação pessoal e profissional de qualidade.</p>
          </AsideImage>
          <div className='class_iframe'>
            <iframe width="500" height="315" src="https://www.youtube.com/embed/Sz4ETYvR32w" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
          <div className='class_iframe_mobile'>
            <iframe width="300" height="189" src="https://www.youtube.com/embed/Sz4ETYvR32w" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
        </AsideClass>
        <div className='class__container__info'>
          <div className='subtitle__pbb'>
            <h3>Conteúdo do curso</h3>
            <p>Todos os Cursos CEBRAC têm como foco a Formação Empreendedora do aluno com ferramentas interdisciplinares, Oficinas, Desenvolvimento da Criatividade e da Liderança no Meio Social.</p>
          </div>
          {pbbData.map((data, index) => {
            return (
              <div className='class__container__info__content' key={index}>
                <div className='class_desc_icon'>
                  <Image
                    src={data.itemIcon}
                    width={75}
                    height={75}
                    alt="Icone"
                  />
                </div>
                <div className='class__infos_txt'>
                  <h4>{data.itemTitle}</h4>
                  <p>{data.itemText}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <RowClass
        classCss="row__pbb"
      />
      <div className='ClassBottomInfos'>
        <div className='ClassBottomInfos_cont'>
          {classBottomInfos_pbb_col1.map((data, index) => {
            return (
              <div className='BottomInfos__col1' key={index}>
                <div className='BottomInfos__col1_img'>
                  <Image
                    src={data.itemIcon}
                    width={120}
                    height={100}
                    alt="Icone pbb"
                  />
                </div>
                <p>Indicado <span>para</span></p>
                <ul>
                  <li>- {data.itemTextOne}</li>
                  <li>- {data.itemTextTwo}</li>
                  <li>- {data.itemTextThree}</li>
                  <li>- {data.itemTextFour}</li>
                </ul>
              </div>
            )
          })}
          {classBottomInfos_pbb_col2.map((data, index) => {
            return (
              <div className='BottomInfos__col2' key={index}>
                <div className='BottomInfos__col2_img'>
                  <Image
                    src={data.itemIconTwo}
                    width={120}
                    height={100}
                    alt="Icone pbb"
                  />
                </div>
                <p>Grandes <span>diferenciais</span></p>
                <ul>
                  <li>- {data.itemTwoTextOne}</li>
                  <li>- {data.itemTwoTextTwo}</li>
                  <li>- {data.itemTwoTextThree}</li>
                  <li>- {data.itemTwoTextFour}</li>
                  <li>- {data.itemTwoTextFive}</li>
                  <li>- {data.itemTwoTextSix}</li>
                  <li>- {data.itemTwoTextSeven}</li>
                  <li>- {data.itemTwoTextEight}</li>
                </ul>
              </div>
            )
          })}
        </div>
      </div>
      <RowClassBottom
        classCss="rowbottom__pbb"
        imageOneRow="https://raw.githubusercontent.com/thiagosullivan/cuiaba-cebrac/main/assets/clock-white.png"
        imageTwoRow="https://raw.githubusercontent.com/thiagosullivan/cuiaba-cebrac/main/assets/work-white-1.png"
        imageThreeRow="https://raw.githubusercontent.com/thiagosullivan/cuiaba-cebrac/main/assets/shield-white.png"
        colOneTxt="256 Horas (204H + 52 EAD)"
        colTwoTxtOne="Aprimore-se"
        colTwoTxtTwo="Facilidades para fazer o seu curso, fortalecendo o aprendizado escolar e sua vida profissional."
        colThreeTxtOne="Diferenciais"
        colThreeTxtTwo="Aulas práticas com início imediato. Aulas presenciais com educador. Certificado com reconhecimento."
      />
    </PbbContainer>
  )
}

export default Pbb