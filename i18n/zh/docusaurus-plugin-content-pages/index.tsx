import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function Home(): JSX.Element {
  const logoSrc = useBaseUrl('/logo/logo.svg');

  return (
    <Layout
      title="EvidenceMarket 文档"
      description="一个将“犯罪证据”转化为可交易资产的去中心化情报市场">
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="mb-8">
          <img src={logoSrc} alt="EvidenceMarket Logo" width={120} height={120} className="mx-auto mb-6" />
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
            Evidence Market 文档
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-8">
          一个将“犯罪证据”转化为可交易资产的去中心化情报市场
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 justify-center mb-12">
          <Link
            className="px-8 py-3 bg-primary text-black hover:text-black rounded-lg hover:opacity-80 transition text-lg font-semibold"
            to="/docs/intro">
            开始阅读
          </Link>
          <Link
            className="px-8 py-3 bg-white/10 text-white rounded-lg hover:bg-white/20 transition text-lg font-semibold border border-white/20"
            to="/docs/product">
            核心产品
          </Link>
        </div>

        <div className="max-w-3xl mx-auto mt-16">
          <h2 className="text-2xl font-bold mb-6 text-white">快速导航</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
            <Link
              to="/docs/product"
              className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition border border-white/10">
              <h3 className="text-primary font-semibold mb-2">核心产品</h3>
              <p className="text-white/70 text-sm">了解我们的核心产品</p>
            </Link>
            <Link
              to="/docs/evidence-box-smart-contracts"
              className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition border border-white/10">
              <h3 className="text-primary font-semibold mb-2">技术文档</h3>
              <p className="text-white/70 text-sm">智能合约架构和技术实现</p>
            </Link>
            <Link
              to="/docs/evidence-box"
              className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition border border-white/10">
              <h3 className="text-primary font-semibold mb-2">功能细节</h3>
              <p className="text-white/70 text-sm">真相盒子、状态机制等功能</p>
            </Link>
            <Link
              to="/docs/faq"
              className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition border border-white/10">
              <h3 className="text-primary font-semibold mb-2">常见问题</h3>
              <p className="text-white/70 text-sm">解答常见疑问</p>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
