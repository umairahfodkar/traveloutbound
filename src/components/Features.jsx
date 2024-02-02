import React from 'react';
import fea from '../assets/images/featuress.png';

export default function Features() {
  const containerStyle = {
    backgroundImage: `url(${fea})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div className="relative  mt-24 ">
      <div className="absolute top-0  left-0 w-full h-full  bg-cover bg-center z-0" style={containerStyle}></div>
      <div className="flex flex-col sm:flex-row sm:gap-16 justify-center  items-center relative z-10">
        {/* Container 1 */}
        <div className=" bg-white sm:mt-40   shadow-4xl rounded-lg h-[200px]  m-4 p-6 w-64 sm:w-64 flex flex-col items-center justify-center">
          <div className="w-24 text-center  h-24">
            {/* SVG code for Container 1 */}
            <svg width="80" height="80" viewBox="0 0 115 115" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="57.216" cy="57.258" r="57.216" fill="#11B99F"/>
<path d="M72.2079 27.3296C83.71 27.3296 90.5069 33.9334 90.5069 45.1452V45.2696H76.3733C69.796 45.2812 64.4677 50.4763 64.4558 56.8893C64.4469 63.3167 69.7811 68.535 76.3733 68.5436H90.5187V69.5647C90.5187 80.7765 83.7219 87.4064 72.2198 87.4064H42.0686C30.5636 87.4064 23.7667 80.7765 23.7667 69.5647V45.1452C23.7667 33.9334 30.5636 27.3296 42.0686 27.3296H72.2079ZM58.4214 40.2625H39.5855C38.1852 40.2683 37.0489 41.3762 37.0429 42.7444C37.037 44.1184 38.1763 45.2378 39.5855 45.2436H58.4451C59.8544 45.2378 60.9936 44.1184 60.9877 42.7415C60.9817 41.3675 59.8306 40.2567 58.4214 40.2625Z" fill="white"/>
<path opacity="0.4" d="M70.618 58.3583C71.316 61.5329 74.0994 63.7665 77.2771 63.7084H88.1241C89.4463 63.7084 90.5188 62.6134 90.5188 61.2599V52.8106C90.5159 51.46 89.4463 50.362 88.1241 50.3591H77.0218C73.4071 50.3707 70.4875 53.3711 70.4932 57.0686C70.4932 57.5014 70.5357 57.9342 70.618 58.3583Z" fill="white"/>
<path d="M77.1683 60.3717C79.0116 60.3717 80.5059 58.8774 80.5059 57.0341C80.5059 55.1908 79.0116 53.6965 77.1683 53.6965C75.325 53.6965 73.8307 55.1908 73.8307 57.0341C73.8307 58.8774 75.325 60.3717 77.1683 60.3717Z" fill="white"/>
</svg>

          </div>
          <p className=" text-center   font-semibold  mt-4">AFFORDABLE PRICE GUARANTEE</p>
        </div>

        {/* Container 2 */}
        <div className=" bg-white shadow-4xl rounded-lg h-[200px] sm:mt-40 m-4 p-6 w-64 sm:w-64  flex flex-col items-center justify-center">
          <div className="w-24  h-24">
            {/* SVG code for Container 2 */}
            <svg width="80" height="80" viewBox="0 0 115 115" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="57.216" cy="57.216" r="57.216" fill="#11B99F"/>
<path d="M57.6561 21.126C64.1239 21.126 70.0888 22.7197 75.5508 25.9072C81.0128 29.0946 85.3375 33.4193 88.5249 38.8813C91.7124 44.3433 93.3061 50.3082 93.3061 56.776C93.3061 63.2437 91.7124 69.2086 88.5249 74.6706C85.3375 80.1326 81.0128 84.4573 75.5508 87.6448C70.0888 90.8322 64.1239 92.4259 57.6561 92.4259C51.1884 92.4259 45.2235 90.8322 39.7615 87.6448C34.2995 84.4573 29.9748 80.1326 26.7873 74.6706C23.5999 69.2086 22.0062 63.2437 22.0062 56.776C22.0062 50.3082 23.5999 44.3433 26.7873 38.8813C29.9748 33.4193 34.2995 29.0946 39.7615 25.9072C45.2235 22.7197 51.1884 21.126 57.6561 21.126ZM70.375 45.3104C70.3131 45.3413 70.1661 45.4883 69.934 45.7514C69.7019 46.0144 69.493 46.1614 69.3074 46.1924C69.3693 46.1924 69.4389 46.115 69.5163 45.9603C69.5936 45.8055 69.671 45.6353 69.7484 45.4497C69.8257 45.264 69.8799 45.1557 69.9108 45.1247C70.0965 44.9081 70.4369 44.676 70.932 44.4284C71.3653 44.2428 72.1699 44.0571 73.3458 43.8714C74.398 43.6238 75.1871 43.794 75.7132 44.382C75.6513 44.3201 75.7983 44.119 76.1542 43.7786C76.5101 43.4382 76.7345 43.2525 76.8273 43.2215C76.9201 43.1596 77.1522 43.09 77.5236 43.0126C77.8949 42.9353 78.127 42.8192 78.2199 42.6645L78.3127 41.6433C77.9414 41.6742 77.6706 41.5659 77.5004 41.3183C77.3302 41.0708 77.2296 40.7458 77.1986 40.3435C77.1986 40.4054 77.1058 40.5292 76.9201 40.7149C76.9201 40.4983 76.8505 40.3745 76.7112 40.3435C76.572 40.3126 76.394 40.3281 76.1774 40.39C75.9608 40.4519 75.8215 40.4673 75.7597 40.4364C75.4502 40.3435 75.2181 40.2275 75.0634 40.0882C74.9086 39.949 74.7848 39.6937 74.692 39.3223C74.5992 38.951 74.5373 38.7189 74.5063 38.626C74.4444 38.4713 74.2974 38.3088 74.0653 38.1386C73.8333 37.9684 73.6863 37.806 73.6244 37.6512C73.5934 37.5893 73.5547 37.5042 73.5083 37.3959C73.4619 37.2876 73.4155 37.187 73.3691 37.0942C73.3226 37.0014 73.2607 36.9163 73.1834 36.8389C73.106 36.7615 73.0209 36.7228 72.9281 36.7228C72.8352 36.7228 72.7269 36.8002 72.6031 36.9549C72.4794 37.1097 72.3633 37.2644 72.255 37.4191C72.1467 37.5739 72.0771 37.6512 72.0461 37.6512C71.9533 37.5893 71.8604 37.5661 71.7676 37.5816C71.6748 37.5971 71.6051 37.6125 71.5587 37.628C71.5123 37.6435 71.4427 37.6899 71.3498 37.7673C71.257 37.8446 71.1796 37.8988 71.1177 37.9297C71.0249 37.9916 70.8934 38.0381 70.7232 38.069C70.553 38.0999 70.4214 38.1309 70.3286 38.1618C70.7928 38.0071 70.7773 37.8369 70.2822 37.6512C69.9727 37.5274 69.7251 37.481 69.5395 37.512C69.818 37.3882 69.934 37.2025 69.8876 36.9549C69.8412 36.7074 69.7097 36.4907 69.493 36.3051H69.7251C69.6942 36.1813 69.5627 36.0498 69.3306 35.9105C69.0985 35.7712 68.8277 35.6397 68.5182 35.5159C68.2088 35.3922 68.0076 35.2993 67.9148 35.2374C67.6672 35.0827 67.1411 34.9357 66.3365 34.7964C65.5319 34.6572 65.0213 34.6494 64.8047 34.7732C64.65 34.9589 64.5803 35.1214 64.5958 35.2606C64.6113 35.3999 64.6732 35.6165 64.7815 35.9105C64.8898 36.2045 64.944 36.3979 64.944 36.4907C64.9749 36.6764 64.8898 36.8776 64.6887 37.0942C64.4875 37.3108 64.3869 37.4965 64.3869 37.6512C64.3869 37.8679 64.6036 38.1077 65.0368 38.3707C65.4701 38.6338 65.6248 38.9664 65.501 39.3687C65.4082 39.6163 65.1606 39.8639 64.7583 40.1114C64.356 40.359 64.1084 40.5447 64.0156 40.6685C63.8609 40.916 63.8376 41.2023 63.946 41.5272C64.0543 41.8522 64.2167 42.1075 64.4334 42.2932C64.4952 42.355 64.5185 42.4169 64.503 42.4788C64.4875 42.5407 64.4334 42.6103 64.3405 42.6877C64.2477 42.7651 64.1626 42.827 64.0852 42.8734C64.0078 42.9198 63.9073 42.974 63.7835 43.0359L63.6442 43.1287C63.3038 43.2834 62.9866 43.1906 62.6926 42.8502C62.3986 42.5098 62.1898 42.1075 62.066 41.6433C61.8493 40.8696 61.6018 40.4054 61.3233 40.2507C60.6115 40.0031 60.1628 40.0186 59.9771 40.2971C59.8224 39.8948 59.188 39.4925 58.0739 39.0902C57.3003 38.8117 56.4028 38.7498 55.3816 38.9045C55.5673 38.8736 55.5673 38.6415 55.3816 38.2083C55.165 37.7441 54.871 37.5584 54.4996 37.6512C54.5925 37.4656 54.6544 37.1948 54.6853 36.8389C54.7163 36.483 54.7317 36.2741 54.7317 36.2122C54.8246 35.8099 55.0102 35.4541 55.2888 35.1446C55.3197 35.1136 55.428 34.9821 55.6137 34.75C55.7994 34.5179 55.9464 34.309 56.0547 34.1234C56.163 33.9377 56.1707 33.8448 56.0779 33.8448C57.161 33.9686 57.9347 33.7984 58.3989 33.3342C58.5536 33.1795 58.7315 32.9165 58.9327 32.5451C59.1338 32.1738 59.2963 31.9107 59.4201 31.756C59.6986 31.5703 59.9152 31.4852 60.0699 31.5007C60.2247 31.5162 60.449 31.6013 60.743 31.756C61.037 31.9107 61.2614 31.9881 61.4161 31.9881C61.8493 32.019 62.0892 31.8488 62.1356 31.4775C62.182 31.1061 62.066 30.7967 61.7875 30.5491C62.1588 30.58 62.2052 30.317 61.9267 29.76C61.772 29.5433 61.6482 29.4041 61.5554 29.3422C61.184 29.2184 60.7662 29.2958 60.302 29.5743C60.0545 29.6981 60.0854 29.8218 60.3949 29.9456C60.3639 29.9147 60.2169 30.0772 59.9539 30.433C59.6909 30.7889 59.4355 31.0597 59.188 31.2454C58.9404 31.431 58.6928 31.3537 58.4453 31.0133C58.4143 30.9823 58.3292 30.7734 58.19 30.3866C58.0507 29.9998 57.9037 29.7909 57.749 29.76C57.5014 29.76 57.2538 29.9921 57.0063 30.4562C57.0991 30.2087 56.9289 29.9766 56.4957 29.76C56.0624 29.5433 55.6911 29.4195 55.3816 29.3886C55.9696 29.0172 55.8458 28.5995 55.0102 28.1353C54.7936 28.0115 54.4764 27.9341 54.0587 27.9032C53.6409 27.8722 53.3392 27.9341 53.1535 28.0889C52.9987 28.3055 52.9136 28.4834 52.8982 28.6227C52.8827 28.7619 52.9601 28.8857 53.1303 28.994C53.3005 29.1024 53.4629 29.1875 53.6177 29.2493C53.7724 29.3112 53.9503 29.3731 54.1515 29.435C54.3526 29.4969 54.4842 29.5433 54.5461 29.5743C54.9793 29.8837 55.1031 30.1004 54.9174 30.2241C54.8555 30.2551 54.724 30.3093 54.5228 30.3866C54.3217 30.464 54.1438 30.5336 53.989 30.5955C53.8343 30.6574 53.7415 30.7193 53.7105 30.7812C53.6177 30.905 53.6177 31.1216 53.7105 31.431C53.8033 31.7405 53.7724 31.9571 53.6177 32.0809C53.4629 31.9262 53.3237 31.6554 53.1999 31.2686C53.0761 30.8818 52.9678 30.6264 52.875 30.5027C53.0916 30.7812 52.7048 30.874 51.7145 30.7812L51.2503 30.7348C51.1265 30.7348 50.8789 30.7657 50.5076 30.8276C50.1362 30.8895 49.819 30.905 49.556 30.874C49.2929 30.8431 49.0841 30.7193 48.9293 30.5027C48.8055 30.2551 48.8055 29.9456 48.9293 29.5743C48.9603 29.4505 49.0222 29.4195 49.115 29.4814C48.9912 29.3886 48.821 29.2416 48.6044 29.0405C48.3878 28.8393 48.233 28.7078 48.1402 28.6459C46.7167 29.1101 45.2622 29.7445 43.7768 30.5491C43.9625 30.58 44.1481 30.5646 44.3338 30.5027C44.4886 30.4408 44.6897 30.3402 44.9373 30.2009C45.1848 30.0617 45.3396 29.9766 45.4015 29.9456C46.4536 29.5124 47.1035 29.4041 47.3511 29.6207L47.5832 29.3886C48.0164 29.8837 48.3259 30.2706 48.5116 30.5491C48.2949 30.4253 47.8307 30.4098 47.119 30.5027C46.5001 30.6883 46.1596 30.874 46.0978 31.0597C46.3144 31.431 46.3917 31.7096 46.3298 31.8952C46.2061 31.8024 46.0281 31.6477 45.796 31.431C45.5639 31.2144 45.3396 31.0442 45.1229 30.9204C44.9063 30.7967 44.6742 30.7193 44.4267 30.6883C43.9315 30.6883 43.5911 30.7038 43.4054 30.7348C38.8873 33.2105 35.2511 36.6455 32.4969 41.0398C32.7135 41.2565 32.8992 41.3802 33.0539 41.4112C33.1777 41.4421 33.2551 41.5814 33.286 41.829C33.317 42.0765 33.3557 42.2467 33.4021 42.3396C33.4485 42.4324 33.6264 42.386 33.9359 42.2003C34.2144 42.4479 34.2608 42.7419 34.0752 43.0823C34.1061 43.0513 34.7869 43.4691 36.1176 44.3356C36.7056 44.8617 37.0305 45.1866 37.0924 45.3104C37.1853 45.6508 37.0305 45.9293 36.6282 46.1459C36.5973 46.0841 36.458 45.9448 36.2105 45.7282C35.9629 45.5116 35.8236 45.4497 35.7927 45.5425C35.6998 45.6972 35.7076 45.9835 35.8159 46.4013C35.9242 46.819 36.0867 47.0124 36.3033 46.9815C36.0867 46.9815 35.9397 47.2291 35.8623 47.7242C35.7849 48.2193 35.7463 48.7686 35.7463 49.3721C35.7463 49.9755 35.7308 50.3392 35.6998 50.4629L35.7927 50.5094C35.6998 50.8807 35.7849 51.4145 36.048 52.1108C36.311 52.8071 36.6437 53.1088 37.046 53.016C36.6437 53.1088 36.9532 53.7742 37.9744 55.012C38.1601 55.2596 38.2838 55.3989 38.3457 55.4298C38.4386 55.4917 38.6243 55.6077 38.9028 55.7779C39.1813 55.9481 39.4134 56.1029 39.5991 56.2421C39.7847 56.3814 39.9395 56.5439 40.0633 56.7295C40.187 56.8843 40.3418 57.2324 40.5274 57.774C40.7131 58.3155 40.9297 58.6791 41.1773 58.8648C41.1154 59.0505 41.2624 59.36 41.6183 59.7932C41.9742 60.2265 42.1366 60.5823 42.1057 60.8609C42.0748 60.8609 42.0361 60.8763 41.9896 60.9073C41.9432 60.9382 41.9045 60.9537 41.8736 60.9537C41.9664 61.1703 42.2063 61.3869 42.5931 61.6036C42.9799 61.8202 43.2198 62.0213 43.3126 62.207C43.3435 62.2998 43.3745 62.4546 43.4054 62.6712C43.4364 62.8878 43.4828 63.058 43.5447 63.1818C43.6066 63.3056 43.7304 63.3365 43.916 63.2747C43.9779 62.6557 43.6066 61.6964 42.802 60.3967C42.3378 59.623 42.0748 59.1743 42.0129 59.0505C41.92 58.8958 41.8349 58.6559 41.7576 58.331C41.6802 58.0061 41.6106 57.7817 41.5487 57.6579C41.6106 57.6579 41.7034 57.6811 41.8272 57.7276C41.951 57.774 42.0825 57.8281 42.2217 57.89C42.361 57.9519 42.4771 58.0138 42.5699 58.0757C42.6627 58.1376 42.6937 58.184 42.6627 58.215C42.5699 58.4316 42.6008 58.7024 42.7556 59.0273C42.9103 59.3522 43.096 59.6385 43.3126 59.886C43.5292 60.1336 43.7923 60.4276 44.1017 60.768C44.4112 61.1084 44.5969 61.3096 44.6588 61.3715C44.8444 61.5571 45.0611 61.8589 45.3086 62.2766C45.5562 62.6944 45.5562 62.9033 45.3086 62.9033C45.5871 62.9033 45.8966 63.058 46.237 63.3675C46.5774 63.677 46.8405 63.9864 47.0261 64.2959C47.1809 64.5434 47.3047 64.9457 47.3975 65.5028C47.4903 66.0598 47.5677 66.4312 47.6296 66.6168C47.6915 66.8335 47.823 67.0423 48.0242 67.2435C48.2253 67.4446 48.4187 67.5916 48.6044 67.6845L49.3471 68.0558L49.9506 68.3808C50.1053 68.4427 50.3915 68.6051 50.8093 68.8682C51.2271 69.1312 51.5597 69.3092 51.8073 69.402C52.1168 69.5258 52.3643 69.5877 52.55 69.5877C52.7357 69.5877 52.9601 69.549 53.2231 69.4716C53.4861 69.3943 53.695 69.3401 53.8498 69.3092C54.314 69.2473 54.7627 69.4794 55.1959 70.0054C55.6292 70.5315 55.9541 70.8565 56.1707 70.9802C57.2848 71.5682 58.1358 71.7384 58.7238 71.4909C58.6619 71.5218 58.6696 71.6379 58.747 71.839C58.8244 72.0401 58.9481 72.28 59.1184 72.5585C59.2886 72.837 59.4278 73.0614 59.5361 73.2316C59.6444 73.4018 59.7295 73.5333 59.7914 73.6261C59.9462 73.8118 60.2247 74.0439 60.627 74.3224C61.0293 74.6009 61.3078 74.833 61.4625 75.0187C61.6482 74.8949 61.7565 74.7557 61.7875 74.6009C61.6946 74.8485 61.8029 75.158 62.1124 75.5293C62.4219 75.9007 62.7004 76.0554 62.9479 75.9935C63.3812 75.9007 63.5978 75.4055 63.5978 74.5081C62.6385 74.9723 61.8803 74.6938 61.3233 73.6726C61.3233 73.6416 61.2846 73.5565 61.2072 73.4173C61.1299 73.278 61.068 73.1465 61.0215 73.0227C60.9751 72.8989 60.9364 72.7674 60.9055 72.6281C60.8745 72.4889 60.8745 72.3728 60.9055 72.28C60.9364 72.1871 61.0138 72.1407 61.1376 72.1407C61.4161 72.1407 61.5708 72.0866 61.6018 71.9783C61.6327 71.8699 61.6018 71.6765 61.5089 71.398C61.4161 71.1195 61.3542 70.9184 61.3233 70.7946C61.2923 70.547 61.1221 70.2375 60.8127 69.8662C60.5032 69.4948 60.3175 69.2627 60.2556 69.1699C60.1009 69.4484 59.8533 69.5722 59.5129 69.5412C59.1725 69.5103 58.9249 69.371 58.7702 69.1235C58.7702 69.1544 58.747 69.2395 58.7006 69.3788C58.6542 69.518 58.6309 69.6186 58.6309 69.6805C58.2286 69.6805 57.9966 69.665 57.9347 69.6341C57.9656 69.5412 58.0043 69.2705 58.0507 68.8218C58.0971 68.373 58.1513 68.0249 58.2132 67.7773C58.2441 67.6535 58.3292 67.4679 58.4685 67.2203C58.6077 66.9727 58.7238 66.7484 58.8166 66.5472C58.9095 66.3461 58.9714 66.1526 59.0023 65.967C59.0332 65.7813 58.9636 65.6343 58.7934 65.526C58.6232 65.4177 58.3524 65.379 57.9811 65.4099C57.3931 65.4409 56.9908 65.7503 56.7742 66.3383C56.7432 66.4312 56.6968 66.5936 56.6349 66.8257C56.573 67.0578 56.4957 67.2358 56.4028 67.3595C56.31 67.4833 56.1707 67.5916 55.9851 67.6845C55.7684 67.7773 55.3971 67.8083 54.871 67.7773C54.3449 67.7464 53.9736 67.669 53.7569 67.5452C53.3546 67.2977 53.0065 66.8489 52.7125 66.1991C52.4185 65.5492 52.2715 64.9767 52.2715 64.4816C52.2715 64.1721 52.3102 63.7621 52.3876 63.2514C52.4649 62.7408 52.5113 62.354 52.5268 62.091C52.5423 61.8279 52.4572 61.4488 52.2715 60.9537C52.3643 60.8918 52.5036 60.7448 52.6893 60.5127C52.875 60.2806 53.0297 60.1181 53.1535 60.0253C53.2154 59.9944 53.285 59.9711 53.3624 59.9557C53.4397 59.9402 53.5094 59.9402 53.5713 59.9557C53.6331 59.9711 53.695 59.9479 53.7569 59.886C53.8188 59.8242 53.8652 59.7313 53.8962 59.6075C53.8652 59.5766 53.8033 59.5302 53.7105 59.4683C53.6177 59.3754 53.5558 59.329 53.5248 59.329C53.7415 59.4219 54.1824 59.3986 54.8478 59.2594C55.5131 59.1201 55.9386 59.1433 56.1243 59.329C56.5885 59.6694 56.9289 59.6385 57.1455 59.2362C57.1455 59.2052 57.1068 59.0582 57.0295 58.7952C56.9521 58.5322 56.9444 58.3233 57.0063 58.1685C57.161 59.0041 57.6097 59.1433 58.3524 58.5863C58.4453 58.6791 58.6851 58.7565 59.0719 58.8184C59.4588 58.8803 59.7295 58.9577 59.8843 59.0505C59.9771 59.1124 60.0854 59.1975 60.2092 59.3058C60.333 59.4141 60.4181 59.4837 60.4645 59.5147C60.5109 59.5456 60.5883 59.5379 60.6966 59.4915C60.8049 59.4451 60.9364 59.3445 61.0912 59.1898C61.4006 59.623 61.5863 59.9944 61.6482 60.3038C61.9886 61.5417 62.2826 62.2225 62.5302 62.3463C62.7468 62.4391 62.917 62.4701 63.0408 62.4391C63.1646 62.4082 63.2342 62.2612 63.2497 61.9981C63.2651 61.7351 63.2651 61.5185 63.2497 61.3483C63.2342 61.178 63.211 60.9846 63.18 60.768L63.1336 60.3967V59.5611L63.0872 59.1898C62.623 59.0969 62.3368 58.9112 62.2284 58.6327C62.1201 58.3542 62.1433 58.068 62.2981 57.774C62.4528 57.48 62.6849 57.1937 62.9944 56.9152C63.0253 56.8843 63.1491 56.8301 63.3657 56.7527C63.5823 56.6754 63.8222 56.5748 64.0852 56.451C64.3483 56.3272 64.5417 56.2035 64.6655 56.0797C65.3153 55.4917 65.5474 54.9501 65.3617 54.455C65.5784 54.455 65.7486 54.3157 65.8723 54.0372C65.8414 54.0372 65.764 53.9908 65.6403 53.898C65.5165 53.8051 65.4004 53.7278 65.2921 53.6659C65.1838 53.604 65.1142 53.573 65.0832 53.573C65.3617 53.4183 65.3927 53.1707 65.1761 52.8303C65.3308 52.7375 65.4468 52.5673 65.5242 52.3197C65.6016 52.0721 65.7176 51.9174 65.8723 51.8555C66.1509 52.2269 66.4758 52.2578 66.8472 51.9484C67.0638 51.7008 67.0793 51.4532 66.8936 51.2056C67.0483 50.989 67.3655 50.8266 67.8452 50.7182C68.3248 50.6099 68.6111 50.4629 68.7039 50.2773C68.9205 50.3392 69.0443 50.3082 69.0753 50.1844C69.1062 50.0606 69.1217 49.875 69.1217 49.6274C69.1217 49.3798 69.1681 49.1941 69.261 49.0704C69.3847 48.9156 69.6168 48.7764 69.9572 48.6526C70.2977 48.5288 70.4988 48.4514 70.5607 48.4205L71.3498 47.9099C71.4427 47.7861 71.4427 47.7242 71.3498 47.7242C71.9069 47.7861 72.3865 47.6159 72.7888 47.2136C73.0983 46.8732 73.0054 46.5637 72.5103 46.2852C72.6031 46.0995 72.5567 45.9525 72.371 45.8442C72.1854 45.7359 71.9533 45.6508 71.6748 45.5889C71.7676 45.558 71.9455 45.5502 72.2086 45.5657C72.4716 45.5812 72.6341 45.558 72.696 45.4961C73.1602 45.1866 73.0519 44.939 72.371 44.7534C71.845 44.5986 71.1796 44.7843 70.375 45.3104ZM62.8087 86.0201C69.1836 84.906 74.6146 81.9816 79.1018 77.2468C79.009 77.154 78.8156 77.0844 78.5216 77.038C78.2276 76.9915 78.0342 76.9374 77.9414 76.8755C77.3843 76.6589 77.013 76.5351 76.8273 76.5041C76.8582 76.2875 76.8196 76.0864 76.7112 75.9007C76.6029 75.715 76.4791 75.5757 76.3399 75.4829C76.2006 75.3901 76.0072 75.2663 75.7597 75.1116C75.5121 74.9568 75.3419 74.8485 75.249 74.7866C75.1871 74.7247 75.0788 74.6319 74.9241 74.5081C74.7694 74.3843 74.6611 74.2992 74.5992 74.2528C74.5373 74.2064 74.4212 74.1368 74.251 74.0439C74.0808 73.9511 73.9493 73.9201 73.8565 73.9511C73.7636 73.982 73.6089 73.9975 73.3923 73.9975L73.253 74.0439C73.1602 74.0749 73.0751 74.1135 72.9977 74.16C72.9203 74.2064 72.8352 74.2528 72.7424 74.2992C72.6496 74.3456 72.5877 74.3921 72.5567 74.4385C72.5258 74.4849 72.5258 74.5236 72.5567 74.5545C71.9069 74.0284 71.3498 73.688 70.8856 73.5333C70.7309 73.5024 70.5607 73.4173 70.375 73.278C70.1893 73.1387 70.0269 73.0304 69.8876 72.9531C69.7484 72.8757 69.5936 72.8525 69.4234 72.8834C69.2532 72.9144 69.0753 73.0227 68.8896 73.2084C68.7349 73.3631 68.642 73.5952 68.6111 73.9047C68.5801 74.2141 68.5492 74.4153 68.5182 74.5081C68.3016 74.3534 68.3016 74.0826 68.5182 73.6958C68.7349 73.3089 68.7658 73.0227 68.6111 72.837C68.5182 72.6513 68.3558 72.5817 68.1237 72.6281C67.8916 72.6745 67.7059 72.7442 67.5667 72.837C67.4274 72.9299 67.2495 73.0614 67.0328 73.2316C66.8162 73.4018 66.677 73.5024 66.6151 73.5333C66.5532 73.5643 66.4216 73.6494 66.2205 73.7886C66.0193 73.9279 65.8878 74.0439 65.8259 74.1368C65.7331 74.2605 65.6403 74.4462 65.5474 74.6938C65.4546 74.9414 65.3772 75.1116 65.3153 75.2044C65.2534 75.0806 65.0755 74.98 64.7815 74.9027C64.4875 74.8253 64.3405 74.7402 64.3405 74.6474C64.4024 74.9568 64.4643 75.4984 64.5262 76.272C64.5881 77.0457 64.6655 77.6337 64.7583 78.036C64.9749 78.9953 64.7892 79.738 64.2013 80.2641C63.3657 81.0377 62.917 81.6567 62.8551 82.1209C62.7313 82.8017 62.917 83.204 63.4121 83.3278C63.4121 83.5444 63.2883 83.8616 63.0408 84.2794C62.7932 84.6971 62.6849 85.0298 62.7158 85.2774C62.7158 85.4631 62.7468 85.7106 62.8087 86.0201Z" fill="white"/>
</svg>


          </div>
          <p className="text-center font-semibold mt-4">WIDE VARIETY OF DESTINATIONS</p>
        </div>

       {/* Container 3 */}
       <div className=" bg-white sm:mt-40 m-4 shadow-4xl h-[200px] rounded-lg p-6 w-64 sm:w-64 flex flex-col items-center justify-center">
          <div className="w-24 h-24">
            {/* SVG code for Container 2 */}
            <svg width="80" height="80" viewBox="0 0 115 115" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="57.216" cy="57.216" r="57.216" fill="#11B99F"/>
<path d="M49.1784 84.0654L76.1325 83.8079C78.6183 83.7841 80.7302 82.2514 81.6082 80.1014L90.4361 58.9011C90.7097 58.2033 90.8499 57.4603 90.8495 56.7107L90.7947 50.9755L90.7644 50.9458L90.7922 50.7209C90.7606 47.4115 88.0546 44.7567 84.7452 44.7883L65.8324 44.969L68.5618 31.255C68.6188 30.955 68.6607 30.6401 68.6576 30.3106C68.6457 29.0678 68.1259 27.9495 67.3095 27.1486L64.0898 24.0195L44.5568 43.9293C43.4891 45.0328 42.8295 46.5367 42.8453 48.1839L43.1314 78.1328C43.163 81.4422 45.8691 84.097 49.1784 84.0654ZM37.1988 84.1799L36.8555 48.2411L24.8759 48.3555L25.2192 84.2943L37.1988 84.1799Z" fill="white"/>
</svg>

          </div>
          <p className="text-center font-semibold mt-4">HIGHLY QUALIFIED SERVICE</p>
        </div>
      </div>
    </div>
  );
}
