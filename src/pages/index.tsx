import {
  CaretRightOutlined,
  InfoOutlined,
  StepForwardOutlined,
} from '@ant-design/icons';
import { Card, Col, Row } from 'antd';

const { Meta } = Card;

export default function HomePage() {
  return (
    <Row justify="center" align="middle" style={{ margin: '20px 0px 20px' }}>
      <Col xs={24} sm={12} md={8} lg={6} xl={4}>
        <Card
          style={{ width: 300 }}
          cover={
            <img src="https://e25ba8-log4d-c.dijingchao.com/202302/1675664205664-15960011-481e-4736-ad81-617656f3d315.png" />
          }
          actions={[
            <a
              href={
                'https://music.apple.com/cn/album/viva-la-vida-or-death-and-all-his-friends/1122773394?l=en'
              }
              target={'_blank'}
            >
              <CaretRightOutlined key="play" />,
            </a>,
            <StepForwardOutlined key={'next'} />,
            <a
              href={'https://music.douban.com/subject/3040149/'}
              target={'_blank'}
            >
              <InfoOutlined key={'info'}></InfoOutlined>,
            </a>,
          ]}
        >
          <Meta title="Viva La Vida" description="Coldplay" />
        </Card>
      </Col>
    </Row>
  );
}
