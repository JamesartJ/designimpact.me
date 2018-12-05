import React from 'react'
import { Link } from 'gatsby'
import { css, cx } from 'emotion'
import { color, typography } from '../system'
import { Row, Col } from 'react-grid-system'
import ReactPlayer from 'react-player'
import PageHeader from './PageHeader'


const videoStyle = css`
  width: 100% !important;
  height: auto !important;
`

const aspectRatioBox = css`
  height: 0;
  overflow: hidden;
  padding-top: calc(591.44 / 1127.34 * 100%);
  background: white;
  position: relative;
`

const aspectRatioBoxInner = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

const imageStyle = css`
  box-shadow: 0 14px 40px rgba(0,0,0,0.05), 0 10px 20px rgba(0,0,0,0.02);
  margin: 0;
  border-radius: 4px;
`

const captionStyle = css`
  margin-top: 5px;
  background: rgba(255, 255, 255, 0.25);
`

const videoOrientationPortrait = css`
  height: 0;
  overflow: hidden;
  padding-top: calc(1112 / 634 * 100%);
  background: white;
  position: relative;
`
class Figure extends React.Component {
  render() {
    const {
      caption,
      imgSrc,
      imgSrc2x,
      imgAlt,
      videoSrc,
      videoOrientation,
    } = this.props

    const videoClass = cx({
      [aspectRatioBox]: true,
      [videoOrientationPortrait]: videoOrientation === 'portrait',
    })

    return (
      <figure>
        {!videoSrc && (
          <img
            className={imageStyle}
            src={imgSrc}
            srcset={`${imgSrc} 1x, ${imgSrc2x} 2x`}
            alt={imgAlt}
          />
        )}
        {videoSrc && (
          <div className={videoClass}>
            <div className={aspectRatioBoxInner}>
              <ReactPlayer width="100%" height="100%" url={videoSrc} />
            </div>
          </div>
        )}
        {caption && <figcaption className={captionStyle}>{caption}</figcaption>}
      </figure>
    )
  }
}

export default Figure
