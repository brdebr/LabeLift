<template>
  <div class="d-flex">
    <p style="white-space:pre-line">

      {{ user.bio }}
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      editing: false,
      user: {
        name: 'Bryrrr',
        surname: 'Oliver',
        email: 'brrr@sss.com',
        bday: '09/08/1993',
        gender: 'Male',
        bio: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus feugiat commodo risus et dignissim. Cras non lectus id ligula pellentesque pellentesque. Mauris vulputate vehicula enim vel aliquet. Sed vitae risus fringilla ligula tempus venenatis. Quisque nec laoreet arcu. Curabitur nisi orci, volutpat nec blandit sed, laoreet eu ante. Vivamus non orci vitae urna viverra rutrum vel eget sem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam interdum mauris et metus ultricies congue.

Fusce consequat turpis sit amet arcu venenatis egestas ac sed dui. Phasellus varius fermentum nibh in elementum. Suspendisse sed justo vitae neque tempor mollis at vel arcu. Nulla sit amet elit sed nisi rhoncus molestie. Nulla facilisi. Pellentesque congue felis nec nisl auctor vulputate. Suspendisse sollicitudin ante sed ipsum rutrum, non rhoncus turpis gravida.

Quisque iaculis ante id vulputate gravida. Etiam in purus tristique neque tempus congue ac vel justo. Nam ac maximus velit, id accumsan lacus. Morbi nulla lacus, elementum et hendrerit luctus, molestie at lorem. Praesent eget libero id metus rutrum consectetur. Suspendisse commodo ante vel lacus aliquam porttitor. Quisque sagittis porta tortor, in pellentesque ex tristique a. Vivamus ullamcorper lorem vitae purus cursus, eget pharetra massa rhoncus. Phasellus velit quam, efficitur non risus vitae, dapibus congue neque. Aenean vel nibh mollis, rutrum eros eu, pulvinar mauris.

In porttitor nibh sit amet condimentum sagittis. Nam placerat metus lacus, et blandit erat feugiat non. Phasellus accumsan convallis tortor et varius. Etiam ac magna eget sapien tincidunt tristique. Sed imperdiet dapibus egestas. Nullam cursus elit velit, vel blandit mi feugiat ut. Aenean auctor malesuada dui, ut cursus turpis bibendum a. Aliquam eu tincidunt nulla, ut convallis ligula. Phasellus mattis sit amet lorem ut dignissim. Maecenas et nulla vel lectus varius tincidunt. Donec auctor quam rhoncus felis sodales, vitae molestie odio interdum.

Nunc velit odio, blandit eget nisl et, ornare posuere lorem. Nullam fermentum leo libero, quis egestas sapien imperdiet ut. Nunc at bibendum massa. Aliquam ut ante eu leo luctus posuere. Sed sed interdum lacus, eu scelerisque nunc. Sed hendrerit, felis sed interdum tincidunt, orci odio dignissim sem, non scelerisque erat nulla non risus. Donec euismod risus nec turpis consequat bibendum. Duis viverra fringilla urna, sed varius odio molestie at. Etiam sed elit lorem. Maecenas aliquet arcu id lobortis finibus. Vestibulum auctor tempus libero, in sagittis turpis luctus id. Nullam dui nibh, tempus a aliquet eu, volutpat in est. Sed commodo pretium odio, vel faucibus leo.

Proin facilisis sit amet felis nec consequat. Nulla tristique augue eget laoreet accumsan. Cras id eleifend augue. Sed eu cursus elit, a ultrices libero. Vivamus pharetra nisi vel sem ultrices, in aliquet risus hendrerit. Praesent luctus tortor vitae blandit auctor. Etiam nec nisl ante.

Donec finibus leo et sollicitudin rutrum. Maecenas purus diam, pulvinar ac congue sed, auctor ut ipsum. In massa sapien, aliquam at erat vel, interdum lacinia lacus. Ut eu ligula in libero feugiat semper. Pellentesque vel elit sit amet arcu malesuada blandit in vitae erat. Fusce imperdiet sollicitudin dapibus. Nullam vulputate dapibus ante, et sagittis risus placerat ac. Fusce gravida metus vitae tempor tristique.
        `
      }
    }
  }
}
</script>

<style lang="scss">
</style>
