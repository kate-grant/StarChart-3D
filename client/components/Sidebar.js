import React,  from "react";

const Sidebar = () => {
  return (
    <div id="sidebar">
      <ul>
        <li>
          <a href="">
            <span>
              <span class="material-symbols-outlined">auto_awesome</span>
            </span>
          </a>
        </li>
        <li>
          <a href="">
            <span>
              <span class="material-symbols-outlined">insights</span>
            </span>
          </a>
        </li>
        <li>
          <a href="https://github.com/kate-grant" target="_blank">
            <span>
              <span class="material-symbols-outlined">code</span>
            </span>
          </a>
        </li>
        <li>
          <a href="/info">
            <span>
              <span class="material-symbols-outlined">info</span>
            </span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
