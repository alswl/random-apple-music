import { Album } from '@/models/album';
import { randomAlbum } from '@/services/douban_top_250';
import {
  CaretRightOutlined,
  InfoOutlined,
  StepForwardOutlined,
} from '@ant-design/icons';
import { Image as AntdImage, Button, Card, Flex, Tooltip } from 'antd';
import { useEffect, useState } from 'react';
import { defineApp, Helmet } from 'umi';

const { Meta } = Card;

function setTitle(title: string) {
  defineApp({
    layout: () => {
      return {
        title: title,
      };
    },
  });
}

export default function HomePage() {
  // useState
  const [album, setAlbum] = useState<Album>(Album.blank);
  const [nextAlbum, setNextAlbum] = useState<Album>(randomAlbum());

  function next() {
    let a = nextAlbum;
    setAlbum(a);
    setTitle(`${a.title} - ${a.artiste}`);

    const n = randomAlbum();
    setNextAlbum(n);
    // pre load next album image
    const img = new Image();
    img.src = n.coverURL;
  }

  useEffect(() => {
    next();
  }, []);

  return (
    <>
      <Helmet>
        <title>
          {album.title} - {album.artiste}
        </title>
      </Helmet>
      <Flex gap="middle" align="end" vertical>
        <Flex style={{ width: '100%' }} justify={'end'} align={'top'}>
          <Button
            type={'link'}
            href={'https://github.com/alswl/random-apple-music'}
          >
            Github
          </Button>
          <Button type={'link'} href={'https://x/alswl'}>
            @alswl
          </Button>
        </Flex>
      </Flex>
      <Flex gap="middle" align="start" vertical>
        <Flex
          style={{ width: '100%', height: '500px' }}
          justify={'center'}
          align={'center'}
        >
          <Card
            style={{ width: 300 }}
            cover={
              <AntdImage src={album.coverURL} width={300} preview={false} />
            }
            actions={[
              <Tooltip title="Play in Apple Music">
                <Button
                  type={'text'}
                  href={album.appleMusicURL}
                  target={'_blank'}
                  disabled={album.appleMusicURL == ''}
                >
                  <CaretRightOutlined key="play" />
                </Button>
              </Tooltip>,
              <Tooltip title="Next Random Album">
                <Button type={'text'} href={'#'} onClick={next}>
                  <StepForwardOutlined key={'next'} />
                </Button>
              </Tooltip>,
              <Tooltip title="Go to Douban Album page">
                <Button type={'text'} href={album.doubanURL} target={'_blank'}>
                  <InfoOutlined key={'info'}></InfoOutlined>
                </Button>
              </Tooltip>,
            ]}
          >
            <Meta title={album.title} description={album.artiste} />
            <Meta description={album.rating} />
          </Card>
        </Flex>
      </Flex>
    </>
  );
}
