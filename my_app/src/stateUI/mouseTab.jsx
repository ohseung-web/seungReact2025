import { useState } from 'react';

export default function HoverTabMenu() {
  const [activeTab, setActiveTab] = useState(null);

  const tabs = [
    { id: 1, title: 'HTML', content: 'HTML은 웹의 구조를 담당합니다.' },
    { id: 2, title: 'CSS', content: 'CSS는 스타일을 담당합니다.' },
    { id: 3, title: 'JavaScript', content: 'JS는 동작을 담당합니다.' },
  ];

  return (
    <div style={{ width: '400px', margin: '50px auto' }}>
      <h3>Hover Tab Menu</h3>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        {tabs.map((tab) => (
          <div
            key={tab.id}
            onMouseEnter={() => setActiveTab(tab.id)} // 마우스 올리면 활성화
            onMouseLeave={() => setActiveTab(null)} // 마우스 벗어나면 비활성화
            style={{
              padding: '10px 20px',
              borderRadius: '8px',
              backgroundColor: activeTab === tab.id ? '#007bff' : '#e0e0e0',
              color: activeTab === tab.id ? 'white' : 'black',
              cursor: 'pointer',
              transition: '0.3s',
            }}
          >
            {tab.title}
          </div>
        ))}
      </div>

      {/* 탭 내용 영역 */}
      <div
        style={{
          marginTop: '20px',
          padding: '15px',
          backgroundColor: '#f9f9f9',
          borderRadius: '8px',
          minHeight: '50px',
        }}
      >
        {activeTab
          ? tabs.find((tab) => tab.id === activeTab)?.content
          : '탭 위에 마우스를 올려보세요.'}
      </div>
    </div>
  );
}
