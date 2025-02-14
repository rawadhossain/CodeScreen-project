import { QuickActionType } from '@/data';
import { Card } from './ui/card';

// some weird tw bug, but this is how it works
// from-orange-500/10 via-orange-500/5 to-transparent
// from-blue-500/10 via-blue-500/5 to-transparent
// from-purple-500/10 via-purple-500/5 to-transparent
// from-primary/10 via-primary/5 to-transparent

type ActionProps = {
    action: QuickActionType;
    onClick: () => void;
};

const ActionCard = ({ action, onClick }: ActionProps) => {
    return (
        <Card
            className="group relative overflow-hidden hover:border-[color:var(--ocean-gradient)] transition-all duration-300 hover:shadow-lg cursor-pointer"
            onClick={onClick}
        >
            {/* ACTION GRADIENT (Keeps original background, changes on hover) */}
            <div
                className={`absolute inset-0 bg-gradient-to-br ${action.gradient} opacity-100 
                group-hover:opacity-50 group-hover:from-teal-400 group-hover:to-blue-600 transition-all`}
            />

            {/* ACTION CONTENT WRAPPER */}
            <div className="relative p-6 size-full">
                <div className="space-y-3">
                    {/* ACTION ICON */}
                    <div
                        className="w-12 h-12 rounded-full flex items-center justify-center bg-accent/10 
                        group-hover:bg-[color:var(--ocean-gradient)] group-hover:text-white transition-all"
                    >
                        <action.icon className="h-6 w-6 text-accent group-hover:text-white" />
                    </div>

                    {/* ACTION DETAILS */}
                    <div className="space-y-1">
                        <h3 className="font-semibold text-xl group-hover:text-[color:var(--ocean-gradient)] transition-colors">
                            {action.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                            {action.description}
                        </p>
                    </div>
                </div>
            </div>
        </Card>
    );
};

export default ActionCard;
