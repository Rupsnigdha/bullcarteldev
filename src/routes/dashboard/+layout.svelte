<script lang="ts">
      import * as Avatar from "$lib/components/shadcn/ui/avatar/index.js";
      import Button from '$lib/components/shadcn/ui/button/button.svelte';
      import Home from "lucide-svelte/icons/home";
      import MessageCirclePlus from "lucide-svelte/icons/message-circle-plus"
</script>

<section class="flex">
    <header>
        <nav class="flex flex-col md:w-[72px] lg:w-60 xl:w-72 fixed h-screen top-0 left-0 gap-4 bg-background/50 border-r border-primary/40">
            <div class="flex gap-4 items-center mx-4 py-4 pb-6 border-b border-primary/40">
                <Avatar.Root>
                    <Avatar.Image src="https://github.com/shadcn.png" alt="@shadcn" />
                    <Avatar.Fallback>CN</Avatar.Fallback>
                </Avatar.Root>
                <div class="hidden lg:block">
                    <h1 class="font-bold tracking-wider text-xl">Bull Cartel</h1>
                </div>
            </div>
            <div class="flex flex-col px-4 h-full">
                <Button href="/dashboard" class="bg-primary/40 rounded-full aspect-square lg:aspect-auto lg:px-4 lg:py-2 flex items-center justify-center lg:justify-start lg:gap-4 hover:bg-primary">
                    <Home size=20/>
                    <span class="hidden lg:inline">
                        Dashboard
                    </span>
                </Button>
            </div>
            <div class="flex flex-col px-4 py-4">
                <Button href="/dashboard" variant="outline" class="border-primary/40 border-2 rounded-full aspect-square lg:aspect-auto lg:px-4 lg:py-2 flex items-center justify-center lg:justify-start lg:gap-4 hover:bg-primary">
                    <MessageCirclePlus size=20/>
                    <span class="hidden lg:inline">
                        Whatsapp
                    </span>
                </Button>
            </div>
        </nav>
    </header>
    <main class="ml-[72px] lg:ml-60 xl:ml-72 flex w-full">
        <slot />
    </main>
</section>

