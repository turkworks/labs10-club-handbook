import React from 'react'
import renderHTML from 'react-render-html'
import { Handbook, Title } from '../../style/handbook-page/handbook'

import styled from 'styled-components'

const SectionRender = props => {
  if (props.sections.length === 0) {
    return (
      <Handbook>
        <Title>Please create a handbook and add some sections.</Title>
      </Handbook>
    )
  } else {
    return (
      <Handbook>
        {props.sections.map(section => {
          const {
            title,
            body,
            img_url,
            img_placement,
            bg_color,
            title_color,
            font,
          } = section

          const Section = styled.div`
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            background: ${bg_color};
            font-family: ${font};

            h1 {
              text-align: center;
              color: ${title_color};
              font-size: 6rem;
            }

            p {
              text-align: center;
              color: ${title_color};
              font-size: 2.6rem;
              text-align: left;
            }
          `

          const SectionTitle = styled.div`
            display: flex;
            flex-direction: column;
            justify-content: center;
            min-height: 25vh;
          `

          const Body = styled.div`
            display: flex;
            width: 100%;
            padding: 5rem;
            justify-content: space-between;
            align-items: center;
            min-height: 50vh;

            .img {
              width: 25%;
              height: auto;
              margin-right: 1.5rem;

              img {
                width: 100%;
                height: auto;
              }
            }

            .body {
              width: 65%;
              min-height: 60%;
            }
          `

          const bgImage = {
            background: `url(${img_url})`,
            backgroundSize: 'cover',
          }

          return (
            <Section style={img_placement == 1 ? bgImage : null}>
              <SectionTitle>
                <h1>{title}</h1>
              </SectionTitle>
              <Body
                style={
                  !img_url || img_placement == 1 || img_placement == 4
                    ? { justifyContent: 'center' }
                    : img_placement == 3
                    ? { flexDirection: 'row-reverse' }
                    : null
                }
              >
                {img_url && img_placement != 1 && img_placement != 4 ? (
                  <div className="img">
                    <img src={img_url} />
                  </div>
                ) : null}
                <div
                  className="body"
                  style={
                    !img_url || img_placement == 1 || img_placement == 4
                      ? { width: '80%' }
                      : null
                  }
                >
                  {renderHTML(body)}
                </div>
              </Body>
            </Section>
          )
        })}
      </Handbook>
    )
  }
}

export default SectionRender
