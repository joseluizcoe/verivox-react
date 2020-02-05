import * as offers from './offers.json';

const allOffers = offers.offers.map(
  offer => {
    return {
      rank: offer.rank,
      providerLogoUrl: offer.provider.logoUrl,
      providerDescription: offer.provider.content.text,
      productTitle: offer.product.content.text,
      downloadSpeed:
      offer.contractTerm.downloadSpeed.amount,
      downloadSpeedUnit:
      offer.contractTerm.downloadSpeed.unit,
      uploadSpeed: offer.contractTerm.uploadSpeed.amount,
      uploadSpeedUnit: offer.contractTerm.uploadSpeed.unit,
      remarks: offer.remarks,
      price: offer.cost.amount,
      priceText: offer.cost.effectiveCost.content.text,
      hasSignupPage: offer.signup.responsive,
      signupPageUrl:
      offer.signup.responsive ? offer.signup.responsive.url : null
    };
  }
);


export default allOffers;