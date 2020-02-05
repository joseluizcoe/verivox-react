import * as offers from './offers.json';

const allOffers = offers.offers.slice(0,10).map(
  offer => {
    return {
      rank: Number(offer.rank),
      providerLogoUrl: String(offer.provider.logoUrl),
      providerDescription: String(offer.provider.content.text),
      productTitle: String(offer.product.content.text),
      downloadSpeed: Number(offer.contractTerm.downloadSpeed.amount),
      downloadSpeedUnit: String(offer.contractTerm.downloadSpeed.unit),
      uploadSpeed: Number(offer.contractTerm.uploadSpeed.amount),
      uploadSpeedUnit: String(offer.contractTerm.uploadSpeed.unit),
      remarks: offer.remarks,
      price: Number(offer.cost.effectiveCost.amount),
      priceText: String(offer.cost.effectiveCost.content.text),
      hasSignupPage: Boolean(offer.signup.responsive),
      signupPageUrl: offer.signup.responsive && String(offer.signup.responsive.url)
    };
  }
);

allOffers.totalResults = Number(offers.totalResults);


export default allOffers;