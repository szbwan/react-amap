import { useRef, useState } from 'react';
import { Map, Geocoder } from '@pansy/react-amap';
import { Button, Input, Space, message } from 'antd';

export default () => {
  const [address, setAddress] = useState<string>('北京市朝阳区阜荣街10号');
  const geocoderRef = useRef<AMap.Geocoder>();

  const getLocation = () => {
    const geocoder = geocoderRef.current;
    if (geocoder) {
      geocoder.getLocation(address, (status, result) => {
        if (status === 'complete' && result.geocodes.length) {
          const location = result.geocodes[0].location;
          message.info(`经纬度: ${location.lng},${location.lat}`);
        }
      })
    }
  }

  return (
    <div>
      <Space>
        <Input
          value={address}
          style={{ width:  200 }}
          onChange={(e) => {
            setAddress(e.target.value);
          }}
        />
        <Button disabled={!address} onClick={getLocation}>
          地址 {'>'} 经纬度
        </Button>
      </Space>

      <Map isRender={false}>
        <Geocoder ref={geocoderRef} />
      </Map>
    </div>
  );
};

