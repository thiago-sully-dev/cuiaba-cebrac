import styled from "styled-components";

export const MccContainer = styled.section`
  font-family: 'Work Sans', sans-serif;

  .title__mcc {
    color: ${({ theme }) => theme.greenThree};
    text-transform: uppercase;
    font-size: 2.1rem;
  }

  .row__mcc {
    background: ${({ theme }) => theme.greenThree};
  }

  .rowbottom__mcc {
    background: ${({ theme }) => theme.greenThree};
  }

  .BottomInfos__col1, .BottomInfos__col2 {
    span {
      color: ${({ theme }) => theme.greenThree};
      text-transform: uppercase;
      font-weight: bold;
    }
  }
  .BottomInfos__col1 p, .BottomInfos__col2 p {
    height: 56px;
  }

  .class_info_bottom {
    max-width: 1300px;
    width: 100%;
    margin: 0 auto 5rem;
    display: flex;

    .class__container__info {
      
      .class__container__info__content {
  
        display: flex;
        align-items: center;
        margin-bottom: 1.8rem;
        color: ${({ theme }) => theme.blackOne};
  
        .class_desc_icon {
          width: 75px;
          height: 75px;
          position: relative;
          margin-right: 1.6rem;
        }
  
        h4 {
          margin-bottom: 0.6rem;
          text-transform: uppercase;
        }
        p {
          max-width: 620px;
          text-align: justify;
        }

        .class__infos_txt span {
          font-size: 12px;
          font-weight: bold;
          text-transform: uppercase;
          color: ${({ theme }) => theme.grayOne};
        }
      }

      .subtitle__mcc {
        margin-bottom: 3.1rem;

        h3 {
          color: ${({ theme }) => theme.greenThree};
          text-transform: uppercase;
          margin-bottom: 0.6rem;
        }

        p {
          color: ${({ theme }) => theme.blackOne};
          text-align: justify;
        }
      }
    } 
  }
`

export const AsideClass = styled.aside`
  max-width: 500px;
  width: 100%;
  height: 100%;
  margin-right: 3.1rem;

  p {
    font-family: 'Merriweather', serif;
    color: #ffffff;
    margin-bottom: 1rem;
    line-height: 1.5;

    span {
      color: ${({ theme }) => theme.greenThree};
      text-transform: uppercase;
    }
  }
`

export const AsideImage = styled.div`
  padding: 3.75rem;
  background-image: url(${props => props.imgUrl});
  margin-bottom: 3.1rem;
`