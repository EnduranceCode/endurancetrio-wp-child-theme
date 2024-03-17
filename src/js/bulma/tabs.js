/*!
 * EnduranceTrio WP Child Theme
 *
 * WordPress Child Theme built with Bulma
 *
 * Copyright (C) 2023 Ricardo do Canto
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <https: //www.gnu.org/licenses/>.
 */

/**
 * Code taken from https://plnkr.co/edit/Vax8bc
 */
const tabSystem = {
  init() {
    document.querySelectorAll('.tabs-menu').forEach((tabMenu) => {
      Array.from(tabMenu.children).forEach((child) => {
        child.addEventListener('click', () => {
          tabSystem.toggle(child.dataset.target);
        });
        if (child.className.includes('is-active')) {
          tabSystem.toggle(child.dataset.target);
        }
      });
    });
  },
  toggle(targetId) {
    document.querySelectorAll('.tab-content').forEach((contentElement) => {
      contentElement.style.display = contentElement.id === targetId ? 'block' : 'none';
      document
        .querySelector(`[data-target="${contentElement.id}"]`)
        .classList[contentElement.id === targetId ? 'add' : 'remove']('is-active');
    });
  },
};

// Enable Bulma's tabs
tabSystem.init();
