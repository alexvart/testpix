function pxView(name) {
    fbq('track', 'ViewContent', {
      content_type: name,
    });
}

function pxCart(value, content_id, content_type) {
  fbq('track', 'AddToCart', {
    value: value, //100
    currency: 'EUR',
    content_ids: content_id, // 'A'
    content_type: content_type, //'Computer'
  });
}

function pxSearch(value) {
  fbq('track', 'Search', {
    search_string: value,
  });
}
