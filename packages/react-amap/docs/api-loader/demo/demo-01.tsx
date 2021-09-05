import { APILoader } from '@pansy/react-amap';

export default () => {
  return (
    <APILoader
      onCreate={(obj) => {
        console.log('已加载 AMap Api');
        console.log(obj);
      }}
    >
      高德 JS Api 已加载
    </APILoader>
  );
};

