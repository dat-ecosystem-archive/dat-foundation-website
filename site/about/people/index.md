---
title: People
section:
  - description: >-
      The Dat Foundation Governance supports the collaboration, funding, and
      community management for Dat. This group is involved in financial and
      legal decisions regarding the Dat Foundation in collaboration with Code
      for Science and Society. Learn more about Dat Foundation governance.
    name: Dat Foundation Governance
    people:
      - Joe Hand
      - Danielle Robinson
  - description: >-
      Donec sed odio dui. Donec id elit non mi porta gravida at eget metus.
      Nullam quis risus eget urna mollis ornare vel eu leo. Etiam porta sem
      malesuada magna mollis euismod. Integer posuere erat a ante venenatis
      dapibus posuere velit aliquet.
    name: Dat Protocol Working Group
    people:
      - Joe Hand
---

<div v-for="(section, index) in $page.frontmatter.section">
  <h1>{{ section.name }}</h1>
  <h2>{{ section.description }}</h2>
 
  <div v-for="person in section.people">
    <Person :name="person" />
  </div>
</div>
