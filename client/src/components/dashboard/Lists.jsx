import React from "react";

import { Box, Divider, ScrollArea, Title } from "@mantine/core";
import { useListsStyles } from "../../hooks/styles/use-dashboard-styles";

const Lists = () => {
  const { classes } = useListsStyles();

  return (
    <Box className={classes.listsWrapper}>
      <Box className={classes.singleListWrapper}>
        <Title order={4}>TODAY</Title>
        <ScrollArea type="always" offsetScrollbars>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            pellentesque tellus at libero porta ornare. Proin nec erat quis nisi
            mattis elementum. Sed malesuada dictum elit, vehicula iaculis dui
            blandit sed. Nullam nunc nunc, posuere eget commodo vel, consequat
            in ante. Aliquam in rhoncus magna. Aliquam nec pulvinar nulla,
            accumsan placerat purus. Pellentesque pulvinar elementum erat, eget
            laoreet nibh vestibulum id. Maecenas diam ipsum, varius ultrices
            arcu non, fermentum mollis mauris. Nullam vitae risus cursus,
            aliquet est eu, viverra turpis. Etiam pulvinar commodo eros, non
            efficitur eros viverra vitae. Nulla facilisi. Cras ac luctus justo.
            Donec id fringilla libero. Maecenas vitae eleifend mi. Duis ac
            varius nibh, vitae tempus lectus. Vestibulum nisl odio, feugiat in
            interdum et, luctus at tellus. Mauris convallis ut lacus vitae
            blandit. In quis tempor libero, eget aliquam arcu. Mauris
            condimentum tincidunt nisi porta malesuada. Morbi iaculis felis
            elementum augue euismod imperdiet. Nulla nec suscipit dolor. Proin
            sit amet quam vel neque laoreet dignissim. Ut sed interdum ex, at
            pretium ipsum. Fusce hendrerit a nunc quis fringilla. Donec ut
            libero et dui blandit congue a eget dui. Nulla id pellentesque mi.
            Praesent dignissim nibh non ex convallis, ut mattis eros interdum.
            Etiam vel quam massa. Integer dui velit, sodales id nisl sit amet,
            iaculis vehicula est. Nam iaculis pellentesque fermentum. Duis eu
            tortor augue. Nulla ut nulla nec eros commodo sagittis in id risus.
            Nunc nunc velit, commodo ut ante a, commodo pharetra libero. In
            ultricies pellentesque nunc, ut elementum odio malesuada et. Duis at
            varius augue. In nec suscipit nisl. Phasellus sollicitudin varius
            risus ac fringilla. Nullam egestas magna nisi, quis feugiat massa
            faucibus non. Etiam faucibus scelerisque dui vitae faucibus.
            Praesent porttitor leo eu accumsan auctor. Pellentesque ultricies
            posuere fringilla. Donec porttitor ligula sit amet ex imperdiet
            finibus. Duis auctor euismod tellus eget dapibus. Vivamus sagittis
            magna tellus, et volutpat orci varius aliquam. Fusce elit eros,
            ultricies finibus dui eu, interdum iaculis felis. Cras eu nulla
            lobortis, porttitor Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Nunc pellentesque tellus at libero porta ornare.
            Proin nec erat quis nisi mattis elementum. Sed malesuada dictum
            elit, vehicula iaculis dui blandit sed. Nullam nunc nunc, posuere
            eget commodo vel, consequat in ante. Aliquam in rhoncus magna.
            Aliquam nec pulvinar nulla, accumsan placerat purus. Pellentesque
            pulvinar elementum erat, eget laoreet nibh vestibulum id. Maecenas
            diam ipsum, varius ultrices arcu non, fermentum mollis mauris.
            Nullam vitae risus cursus, aliquet est eu, viverra turpis. Etiam
            pulvinar commodo eros, non efficitur eros viverra vitae. Nulla
            facilisi. Cras ac luctus justo. Donec id fringilla libero. Maecenas
            vitae eleifend mi. Duis ac varius nibh, vitae tempus lectus.
            Vestibulum nisl odio, feugiat in interdum et, luctus at tellus.
            Mauris convallis ut lacus vitae blandit. In quis tempor libero, eget
            aliquam arcu. Mauris condimentum tincidunt nisi porta malesuada.
            Morbi iaculis felis elementum augue euismod imperdiet. Nulla nec
            suscipit dolor. Proin sit amet quam vel neque laoreet dignissim. Ut
            sed interdum ex, at pretium ipsum. Fusce hendrerit a nunc quis
            fringilla. Donec ut libero et dui blandit congue a eget dui. Nulla
            id pellentesque mi. Praesent dignissim nibh non ex convallis, ut
            mattis eros interdum. Etiam vel quam massa. Integer dui velit,
            sodales id nisl sit amet, iaculis vehicula est. Nam iaculis
            pellentesque fermentum. Duis eu tortor augue. Nulla ut nulla nec
            eros commodo sagittis in id risus. Nunc nunc velit, commodo ut ante
            a, commodo pharetra libero. In ultricies pellentesque nunc, ut
            elementum odio malesuada et. Duis at varius augue. In nec suscipit
            nisl. Phasellus sollicitudin varius risus ac fringilla. Nullam
            egestas magna nisi, quis feugiat massa faucibus non. Etiam faucibus
            scelerisque dui vitae faucibus. Praesent porttitor leo eu accumsan
            auctor. Pellentesque ultricies posuere fringilla. Donec porttitor
            ligula sit amet ex imperdiet finibus. Duis auctor euismod tellus
            eget dapibus. Vivamus sagittis magna tellus, et volutpat orci varius
            aliquam. Fusce elit eros, ultricies finibus dui eu, interdum iaculis
            felis. Cras eu nulla lobortis, porttitor ante aliquam, consequat
            felis. Vestibulum dapibus mi eget varius ultrices. Mauris lobortis
            commodo magna ut eleifend. Nullam dignissim tristique tellus semper
            molestie. In hac habitasse platea dictumst. Vivamus augue lorem,
            finibus ac sem vitae, tincidunt viverra mi. Morbi et velit a metus
            ornare aliquam. Sed cursus, dolor in posuere bibendum, est lorem
            aliquet elit, nec posuere magna neque id libero. Proin eu rhoncus
            quam. Curabitur finibus enim ut pretium semper. Nullam nec ante
            pellentesque, varius libero ac, varius sapien. Integer sodales ante
            eget sapien sollicitudin ornare. Nulla facilisi. Mauris at est quis
            quam placerat varius non a velit. ante aliquam, consequat felis.
            Vestibulum dapibus mi eget varius ultrices. Mauris lobortis commodo
            magna ut eleifend. Nullam dignissim tristique tellus semper
            molestie. In hac habitasse platea dictumst. Vivamus augue lorem,
            finibus ac sem vitae, tincidunt viverra mi. Morbi et velit a metus
            ornare aliquam. Sed cursus, dolor in posuere bibendum, est lorem
            aliquet elit, nec posuere magna neque id libero. Proin eu rhoncus
            quam. Curabitur finibus enim ut pretium semper. Nullam nec ante
            pellentesque, varius libero ac, varius sapien. Integer sodales ante
            eget sapien sollicitudin ornare. Nulla facilisi. Mauris at est quis
            quam placerat varius non a velit.
          </div>
        </ScrollArea>
      </Box>
      <Box className={classes.singleListWrapper}>
        <Title order={4}>TOMORROW</Title>
        <ScrollArea type="always" offsetScrollbars>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            pellentesque tellus at libero porta ornare. Proin nec erat quis nisi
            mattis elementum. Sed malesuada dictum elit, vehicula iaculis dui
            blandit sed. Nullam nunc nunc, posuere eget commodo vel, consequat
            in ante. Aliquam in rhoncus magna. Aliquam nec pulvinar nulla,
            accumsan placerat purus. Pellentesque pulvinar elementum erat, eget
            laoreet nibh vestibulum id. Maecenas diam ipsum, varius ultrices
            arcu non, fermentum mollis mauris. Nullam vitae risus cursus,
            aliquet est eu, viverra turpis. Etiam pulvinar commodo eros, non
            efficitur eros viverra vitae. Nulla facilisi. Cras ac luctus justo.
            Donec id fringilla libero. Maecenas vitae eleifend mi. Duis ac
            varius nibh, vitae tempus lectus. Vestibulum nisl odio, feugiat in
            interdum et, luctus at tellus. Mauris convallis ut lacus vitae
            blandit. In quis tempor libero, eget aliquam arcu. Mauris
            condimentum tincidunt nisi porta malesuada. Morbi iaculis felis
            elementum augue euismod imperdiet. Nulla nec suscipit dolor. Proin
            sit amet quam vel neque laoreet dignissim. Ut sed interdum ex, at
            pretium ipsum. Fusce hendrerit a nunc quis fringilla. Donec ut
            libero et dui blandit congue a eget dui. Nulla id pellentesque mi.
            Praesent dignissim nibh non ex convallis, ut mattis eros interdum.
            Etiam vel quam massa. Integer dui velit, sodales id nisl sit amet,
            iaculis vehicula est. Nam iaculis pellentesque fermentum. Duis eu
            tortor augue. Nulla ut nulla nec eros commodo sagittis in id risus.
            Nunc nunc velit, commodo ut ante a, commodo pharetra libero. In
            ultricies pellentesque nunc, ut elementum odio malesuada et. Duis at
            varius augue. In nec suscipit nisl. Phasellus sollicitudin varius
            risus ac fringilla. Nullam egestas magna nisi, quis feugiat massa
            faucibus non. Etiam faucibus scelerisque dui vitae faucibus.
            Praesent porttitor leo eu accumsan auctor. Pellentesque ultricies
            posuere fringilla. Donec porttitor ligula sit amet ex imperdiet
            finibus. Duis auctor euismod tellus eget dapibus. Vivamus sagittis
            magna tellus, et volutpat orci varius aliquam. Fusce elit eros,
            ultricies finibus dui eu, interdum iaculis felis. Cras eu nulla
            lobortis, porttitor ante aliquam, consequat felis. Vestibulum
            dapibus mi eget varius ultrices. Mauris lobortis commodo magna ut
            eleifend. Nullam dignissim tristique tellus semper molestie. In hac
            habitasse platea dictumst. Vivamus augue lorem, finibus ac sem
            vitae, tincidunt viverra mi. Morbi et velit a metus ornare aliquam.
            Sed cursus, dolor in posuere bibendum, est lorem aliquet elit, nec
            posuere magna neque id libero. Proin eu rhoncus quam. Curabitur
            finibus enim ut pretium semper. Nullam nec ante pellentesque, varius
            libero ac, varius sapien. Integer sodales ante eget sapien
            sollicitudin ornare. Nulla facilisi. Mauris at est quis quam
            placerat varius non a velit.
          </div>
        </ScrollArea>
      </Box>
      <Divider orientation="vertical" size="sm" />
      <Box className={classes.singleListWrapper}>
        <Title order={4}>LEFTOVERS</Title>
        <ScrollArea type="always" offsetScrollbars>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            pellentesque tellus at libero porta ornare. Proin nec erat quis nisi
            mattis elementum. Sed malesuada dictum elit, vehicula iaculis dui
            blandit sed. Nullam nunc nunc, posuere eget commodo vel, consequat
            in ante. Aliquam in rhoncus magna. Aliquam nec pulvinar nulla,
            accumsan placerat purus. Pellentesque pulvinar elementum erat, eget
            laoreet nibh vestibulum id. Maecenas diam ipsum, varius ultrices
            arcu non, fermentum mollis mauris. Nullam vitae risus cursus,
            aliquet est eu, viverra turpis. Etiam pulvinar commodo eros, non
            efficitur eros viverra vitae. Nulla facilisi. Cras ac luctus justo.
            Donec id fringilla libero. Maecenas vitae eleifend mi. Duis ac
            varius nibh, vitae tempus lectus. Vestibulum nisl odio, feugiat in
            interdum et, luctus at tellus. Mauris convallis ut lacus vitae
            blandit. In quis tempor libero, eget aliquam arcu. Mauris
            condimentum tincidunt nisi porta malesuada. Morbi iaculis felis
            elementum augue euismod imperdiet. Nulla nec suscipit dolor. Proin
            sit amet quam vel neque laoreet dignissim. Ut sed interdum ex, at
            pretium ipsum. Fusce hendrerit a nunc quis fringilla. Donec ut
            libero et dui blandit congue a eget dui. Nulla id pellentesque mi.
            Praesent dignissim nibh non ex convallis, ut mattis eros interdum.
            Etiam vel quam massa. Integer dui velit, sodales id nisl sit amet,
            iaculis vehicula est. Nam iaculis pellentesque fermentum. Duis eu
            tortor augue. Nulla ut nulla nec eros commodo sagittis in id risus.
            Nunc nunc velit, commodo ut ante a, commodo pharetra libero. In
            ultricies pellentesque nunc, ut elementum odio malesuada et. Duis at
            varius augue. In nec suscipit nisl. Phasellus sollicitudin varius
            risus ac fringilla. Nullam egestas magna nisi, quis feugiat massa
            faucibus non. Etiam faucibus scelerisque dui vitae faucibus.
            Praesent porttitor leo eu accumsan auctor. Pellentesque ultricies
            posuere fringilla. Donec porttitor ligula sit amet ex imperdiet
            finibus. Duis auctor euismod tellus eget dapibus. Vivamus sagittis
            magna tellus, et volutpat orci varius aliquam. Fusce elit eros,
            ultricies finibus dui eu, interdum iaculis felis. Cras eu nulla
            lobortis, porttitor ante aliquam, consequat felis. Vestibulum
            dapibus mi eget varius ultrices. Mauris lobortis commodo magna ut
            eleifend. Nullam dignissim tristique tellus semper molestie. In hac
            habitasse platea dictumst. Vivamus augue lorem, finibus ac sem
            vitae, tincidunt viverra mi. Morbi et velit a metus ornare aliquam.
            Sed cursus, dolor in posuere bibendum, est lorem aliquet elit, nec
            posuere magna neque id libero. Proin eu rhoncus quam. Curabitur
            finibus enim ut pretium semper. Nullam nec ante pellentesque, varius
            libero ac, varius sapien. Integer sodales ante eget sapien
            sollicitudin ornare. Nulla facilisi. Mauris at est quis quam
            placerat varius non a velit.
          </div>
        </ScrollArea>
      </Box>
    </Box>
  );
};

export default Lists;
