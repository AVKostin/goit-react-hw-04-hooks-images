const BASE_URL = 'https://pixabay.com/api/';

export async function fetchPictures(query, page) {
  const searchParams = new URLSearchParams({
    key: '25823737-b417134f62dbe2cba56a97bcd',
    q: query,
    image_type: 'photo',
    per_page: 12,
    orientation: 'horizontal',
    page,
  });

  const url = `${BASE_URL}?${searchParams}`;
  const response = await fetch(url);
  return response.json();
}
