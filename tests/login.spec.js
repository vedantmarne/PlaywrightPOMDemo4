import { test, expect } from '@playwright/test';
import {LoginPage} from '../pages/login'

test('test', async ({ page }) => {

  const Login = new LoginPage(page)  

  await Login.gotoLoginPage()
  await Login.login('Admin','admin123')   

//   await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
//   await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
//   await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
//   await page.getByRole('button', { name: 'Login' }).click();
});