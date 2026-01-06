
export interface HeroSliderIProps {
    id: number
    title: string
    subtitle: string
    image: string
}


export async function getSlidersData(): Promise<HeroSliderIProps[]> {
    try {
        const res = await fetch(`${process.env.NEXT_PRIVATE_API_URL}/api/admin/hero-sliders`, {
            headers: {
                'Content-Type': 'application/json',
            },
            next: { revalidate: 60 }
        });
        if (!res.ok) {
            throw new Error("Failed to fetch sliders");
        }
        const sliders = await res.json();
        return sliders.data;
    } catch (error) {
        console.error("Error fetching sliders:", error);
        return [];
    }
}