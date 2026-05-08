import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

/**
 * Sidebar configuration
 * Synchronized with the updated document structure.
 */
const sidebars: SidebarsConfig = {
  docs: [
    "intro",
    {
      "type": "category",
      "label": "1. Status Quo & Problem",
      "items": [
        "pain-points",
        "social-principle"
      ]
    },
    {
      "type": "category",
      "label": "2. Solution & Product",
      "items": [
        "solution",
        "product",
        "smart-contracts",
        "user-privacy"
      ]
    },
       {
      "type": "category",
      "label": "3. Truth Box Market",
      "items": [
        "box",
        "box-data",
        "box-status-mechanism",
        "box-market-process",
        "box-create",
        "box-exchange",
        "box-rewards-fee"
      ]
    },
    {
      "type": "category",
      "label": "4. Bounty Market",
      "items": [
        "bounty-token"
      ]
    },
    {
      "type": "category",
      "label": "5. Tokenomics",
      "items": [
        "token",
        "tokenomics"
      ]
    },
    {
      "type": "category",
      "label": "6. Privacy Token",
      "items": [
        "privacy-token",
        "pay",
        "pay-zcash"
      ]
    },
    {
      "type": "category",
      "label": "7. Security Model",
      "items": [
        "challenge",
        "blacklist"
      ]
    },
    {
      "type": "category",
      "label": "8. Governance & Legal",
      "items": [
        "dao",
        "legal-and-cases",
        "legal-challenge"
      ]
    },
    {
      "type": "category",
      "label": "9. Appendix",
      "items": [
        "future-plan",
        "dilemma",
        "faq",
        "faq-2",
        "faq-3",
      ]
    },
    {
      "type": "category",
      "label": "10. Vision & Meaning",
      "items": [
        "commercial",
        "innovative",
        "enlightenment",
        "statement",
        "thanks"
      ]
    }
  ]
};

export default sidebars;
