import { useState } from 'react';
import LongSubtitle from './Info/LongSubtitle';
import TabBar, { TABS } from './Info/TabBar';
import InfoDetail from './Info/InfoDetail';

const TAB_CONTENT: Record<string, {
  description: string;
  items: string[];
}> = {
  'an-uong': {
    description:
      'Qtable POS giúp order nhanh, chọn size/topping, in phiếu bar và quản lý mang đi/ngồi lại hiệu quả.',
    items: [
      'Quán cà phê',
      'Quán ăn / nhà hàng',
      'Quán bar / lounge / pub',
      'Quán ăn di động',
      'Tiệm trà sữa',
      'Tiệm bánh',
    ],
  },
  'ban-le': {
    description:
      'Quản lý tồn kho, doanh thu và khách hàng thân thiết ngay trên một nền tảng đơn giản, nhanh gọn.',
    items: [
      'Cửa hàng bán lẻ',
      'Siêu thị mini / cửa hàng tiện lợi',
      'Cửa hàng thời trang',
      'Cửa hàng điện thoại / điện máy',
      'Nhà sách / văn phòng phẩm',
      'Cửa hàng mỹ phẩm',
    ],
  },
  'dich-vu': {
    description:
      'Đặt lịch, quản lý nhân viên và theo dõi dịch vụ theo từng khách hàng một cách chuyên nghiệp.',
    items: [
      'Dịch vụ & Spa',
      'Spa / làm đẹp',
      'Gym / yoga',
      'Phòng khám nha khoa',
      'Tiệm cắt tóc / barbershop',
      'Trung tâm giáo dục',
    ],
  },
};

export default function InfoSection() {
  const [activeTab, setActiveTab] = useState<string>('an-uong');
  const content = TAB_CONTENT[activeTab];
  const [selectedItem, setSelectedItem] = useState<string>(content.items[0]);

  const handleSelectTab = (tabId: string) => {
    setActiveTab(tabId);
    setSelectedItem(TAB_CONTENT[tabId].items[0]);
  };

  return (
    <section className="w-full lg:max-w-none mx-auto lg:min-h-[1268px] bg-white flex flex-col items-center px-5 py-[60px] lg:px-[86px] lg:py-[120px] gap-8 lg:gap-[60px]">

      {/* Section Header — chứa Badge+Heading + Description (Frame 1618873371) */}
      <div className="flex flex-col items-center gap-4 lg:gap-6 w-full max-w-[350px] lg:max-w-[860px] ">

        {/* Badge + Heading */}
        <div className="flex flex-col items-center p-0 gap-4 lg:gap-6">
          <LongSubtitle text="Long subtitle" />

          <h2 className="font-sans font-extrabold text-[32px] leading-[40px] md:text-[44px] md:leading-[52px] lg:text-[56px] lg:leading-[68px] text-brand-2-01 text-center">
            Everything You Need
          </h2>
        </div>

        {/* Description */}
        <p className="font-sans font-normal text-sm md:text-base leading-[20px] md:leading-[28px] text-brand-2-01 text-center">
          Improve speed of service, boost kitchen efficiency, and drive repeat business with a
          restaurant management solution that offers everything you need to maximize profits and
          offer an unparalleled guest experience – all in one place.
        </p>

      </div>

      {/* Frame 1 — TabBar + InfoDetail Card */}
      <div 
        className="relative flex flex-col items-center pt-0 px-6 pb-6 lg:px-[60px] lg:pb-[60px] gap-6 lg:gap-[40px] rounded-[24px] lg:rounded-[40px] isolate flex-none self-stretch w-full max-w-[350px] lg:max-w-none mx-auto"
        style={{ backgroundColor: '#F5F5EB' }}
      >
        {/* Diagonal grid pattern overlay — Visible only on left/right edges */}
        <div 
          className="absolute inset-0 rounded-[24px] lg:rounded-[40px] pointer-events-none z-0"
          style={{
            backgroundImage: `
              repeating-linear-gradient(45deg, rgba(45, 47, 51, 0.12) 0px, rgba(45, 47, 51, 0.12) 1px, transparent 1px, transparent 60px),
              repeating-linear-gradient(-45deg, rgba(45, 47, 51, 0.12) 0px, rgba(45, 47, 51, 0.12) 1px, transparent 1px, transparent 60px)
            `,
            maskImage: 'linear-gradient(to right, black 0%, transparent 20%, transparent 80%, black 100%)',
            WebkitMaskImage: 'linear-gradient(to right, black 0%, transparent 20%, transparent 80%, black 100%)',
          }}
        />

        {/* Tab bar (Frame 1618873377 layout) */}
        <div className="relative z-30 flex flex-row justify-center items-start p-0 max-w-full flex-none">
          <TabBar tabs={TABS} activeTab={activeTab} onSelect={handleSelectTab} />
        </div>

        {/* Detail card */}
        <InfoDetail
          title={selectedItem}
          description={content.description}
          items={content.items}
          selectedItem={selectedItem}
          onSelectItem={setSelectedItem}
        />

      </div>

    </section>
  );
}
