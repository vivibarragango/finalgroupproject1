const { test, expect } = require('@playwright/test');

const websiteURL = 'http://localhost:3000';

// Expected Constants

const expectedTitle = 'Cafe Casero ViBi – Coffee that cares for you.';
const expectedMetaDescription = 'Come and join our active community and let us care for you with $10 off your next order.';
const expectedLogoText = 'Cafe Casero ViBi';
const expectedMenuItemCount = 4;
const expectedHeroTitle = 'Catered to Your Preference: Savor Our Soulful Coffee';
const expectedHeroButtonText = 'Foster your Community';

test.beforeEach(async ({ page }) => {
    await page.goto(websiteURL);
});

test('Check Page Title', async ({ page }) => {
    const title = await page.title();
    expect(title).toBe(expectedTitle);
});

test('Check HTML encoding is set to UTF-8', async ({ page }) => {
    const metaCharset = await page.getAttribute('meta[charset]', 'charset');
    expect(metaCharset).toBe('utf-8');
});

test('Check SEO Meta Description', async ({ page }) => {
    const metaDescription = await page.getAttribute('meta[name="description"]', 'content');
    expect(metaDescription).toBe(expectedMetaDescription);
});

test('Check SEO Meta Keywords', async ({ page }) => {
    const metaKeywords = await page.getAttribute('meta[name="keywords"]', 'content');
    expect(metaKeywords).not.toBe(expectedMetaKeywordsNotEmpty);
});

test('Check Logo in Header', async ({ page }) => {
    const logoText = await page.locator('p.font-head.text-inherit').textContent();
    expect(logoText).toBe(expectedLogoText);
  });

test('Check Navigation Menu in Header', async ({ page }) => {
    const menuItemCount = await page.locator('ul.lg\\:flex > li').count(); 
    expect(menuItemCount).toBe(expectedMenuItemCount);
  });

test('Check Hero Image', async ({ page }) => {
    const HeroImageSelector = '.hero-image-container img';
    const HeroMeImage = await page.locator(HeroImageSelector);
    expect(HeroMeImage).not.toBeNull();
    const isImageVisible = await HeroMeImage.isVisible();
    expect(isImageVisible).toBe(true);
    const altText = await HeroMeImage.getAttribute('alt');
    expect(altText).not.toBeNull();
  });  

test('Check Hero Title', async ({ page }) => {
    expect(await page.locator('.hero .hero-content h1').textContent()).toBe(expectedHeroTitle);
  });

test('Check Hero Button', async ({ page }) => {
    const actionButtonSelector = '.hero-content button';
    const actionButton = await page.locator(actionButtonSelector);
    const isActionButtonVisible = await actionButton.isVisible();
    expect(isActionButtonVisible).toBe(true);
    const actionButtonText = await actionButton.textContent();
    expect(actionButtonText.trim()).toBe(expectedHeroButtonText);
  });