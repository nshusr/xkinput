<template>
	<Header class="main-header">
		<Menu mode="horizontal" theme="dark">
			<Row type="flex" justify="space-around">
				<MenuItem name="cloud">
					<Button to="http://daniushuangpin.ys168.com/" target="_blank" shape="circle"><Icon size="14" type="md-cloud" /></Button>
				</MenuItem>
				<MenuItem name="home">
					<Button to="/jdweb" shape="circle"><Icon size="14" type="md-home" /></Button>
				</MenuItem>
				<MenuItem name="menu">
					<Dropdown>
						<Button shape="circle"><Icon size="14" type="md-menu" /></Button>
						<DropdownMenu slot="list">
							<DropdownItem>
								<Button type="text" to="/jdweb/doc">官方文档</Button>
							</DropdownItem>
							<DropdownItem>
								<Button type="text" to="https://gitee.com/thxnder/xxjd/wikis/pages?title=1-%E7%AE%80%E6%98%8E%E6%95%99%E7%A8%8B&parent=%E4%B8%80%E3%80%81%E3%80%8A%E6%98%9F%E7%A9%BA%E9%94%AE%E9%81%93%E3%80%8B%E6%96%B9%E6%A1%88" target="_blank">小小文档</Button>
							</DropdownItem>
							<DropdownItem>
								<Button type="text" to="https://739497722.docs.qq.com/ipGva4mn5bo" target="_blank">在线议表</Button>
							</DropdownItem>
							<DropdownItem>
								<Button type="text" to="/jdweb/tools/search">查码工具</Button>
							</DropdownItem>
							<DropdownItem>
								<Button type="text" to="/jdweb/tools/contribution">加词处理</Button>
							</DropdownItem>
							<DropdownItem>
								<Button type="text" to="/jdweb/tools/study">跟打练习</Button>
							</DropdownItem><DropdownItem>
								<Button type="text" to="https://gitee.com/nshu/jdweb" target="_blank">本站项目</Button>
							</DropdownItem>
						</DropdownMenu>
					</Dropdown>
				</MenuItem>
			</Row>
		</Menu>
	</Header>
</template>

<script>
export default {
  name: "Nav",
  data() {
    return {
      propagandaItem: [
        { item: "200个两键上屏单字" },
        { item: "2000个三键上屏单字" },
        { item: "60+％的左右击键率" },
        { item: "活跃的词库维护平台" },
        { item: "21键位双拼" },
        { item: "0.4％的低重音率" },
        { item: "多平台无缝使用" }
      ],
      scrollTop: 0,
      headerStyle: {}
    };
  }
};
</script>

<style lang="less">
.main-header {
  position: fixed;
  height: auto !important;
  width: 100%;
  z-index: 4;
  border-bottom: 1px solid #444;
  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.6);
  transition: all 0.3s;
}
</style>
