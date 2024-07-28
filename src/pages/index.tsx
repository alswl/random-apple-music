import { Album } from '@/models/album';
import { randomAlbum } from '@/services/douban_top_250';
import {
  CaretRightOutlined,
  InfoOutlined,
  StepForwardOutlined,
} from '@ant-design/icons';
import { Image as AntdImage, Button, Card, Flex, message, Tooltip } from 'antd';
import * as Bowser from 'bowser';
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
  const [album, setAlbum] = useState<Album>(Album.blank);
  const [nextAlbum, setNextAlbum] = useState<Album>(randomAlbum());
  const [messageApi, contextHolder] = message.useMessage();

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

  useEffect(() => {
    const browser = Bowser.getParser(window.navigator.userAgent);
    const isValidBrowser = browser.satisfies({
      safari: '>=0',
      ios: '>=0',
    });

    if (!isValidBrowser) {
      messageApi.open({
        type: 'warning',
        content:
          '为了获得最佳体验，请在 macOS 或 iOS 上使用 Safari 直接访问 Apple Music。',
        duration: 10,
      });
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>
          {album.title} - {album.artiste}
        </title>
      </Helmet>
      {contextHolder}
      <Flex gap="middle" align="end" vertical>
        <Flex style={{ width: '100%' }} justify={'end'} align={'top'}>
          <Button
            type={'link'}
            style={{ color: '#e3e3e3' }}
            href={'https://github.com/alswl/random-apple-music'}
          >
            Github
          </Button>
          <Button
            type={'link'}
            style={{ color: '#e3e3e3' }}
            href={'https://x.com/alswl'}
          >
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
              <div
                style={{
                  width: 300,
                  height: 300,
                  overflow: 'hidden',
                  justifyContent: 'center',
                }}
              >
                <AntdImage src={album.coverURL} width={300} preview={false} />
              </div>
            }
            actions={[
              <Tooltip title="豆瓣专辑">
                <Button type={'text'} href={album.doubanURL} target={'_blank'}>
                  <InfoOutlined key={'info'}></InfoOutlined>
                </Button>
              </Tooltip>,
              <Tooltip title="在 Apple Music 中播放">
                <Button
                  type={'text'}
                  href={album.appleMusicURL}
                  target={'_blank'}
                  disabled={album.appleMusicURL == ''}
                >
                  <CaretRightOutlined key="play" />
                </Button>
              </Tooltip>,
              <Tooltip title="下一个随机专辑">
                <Button
                  type={'text'}
                  href={'javascript:void(0)'}
                  onClick={next}
                >
                  <StepForwardOutlined key={'next'} />
                </Button>
              </Tooltip>,
            ]}
          >
            <Meta title={album.title} description={album.artiste} />
            <Meta description={`${album.rating}`} />
            <Meta description={`${album.date} / ${album.style}`} />
          </Card>
        </Flex>
      </Flex>
    </>
  );
}
