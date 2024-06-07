<script lang="ts">
    import * as Avatar from "$lib/components/shadcn/ui/avatar/index.js";
    import * as HoverCard from "$lib/components/shadcn/ui/hover-card/index.js";
  </script>
   
  <HoverCard.Root>
    <HoverCard.Trigger
      href="https://github.com/sveltejs"
      target="_blank"
      rel="noreferrer noopener"
      class="rounded-sm underline underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-black"
    >
      Google Form
    </HoverCard.Trigger>
    <HoverCard.Content class="w-80">
      <div class="flex justify-between space-x-4">
        <Avatar.Root>
          <Avatar.Image src="https://mailmeteor.com/logos/assets/PNG/Google_Forms_Logo_512px.png" />
          <Avatar.Fallback>GF</Avatar.Fallback>
        </Avatar.Root>
        <div class="space-y-1">
          <h4 class="text-sm font-semibold">Google Forms</h4>
        </div>
      </div>
    </HoverCard.Content>
  </HoverCard.Root>